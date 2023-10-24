use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use sqlx::postgres::PgPoolOptions;
use sqlx::Row;
use std::result::Result;

#[get("/")]
async fn hello() -> impl Responder {
    println!("Hello");
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> Result<(), sqlx::Error> {
    let url = "postgres://myuser:mypassword@localhost:5431/mydatabase";
    let pool = PgPoolOptions::new().max_connections(5).connect(url).await?;
    let res = sqlx::query("SELECT 1 + 1 as sum").fetch_one(&pool).await?;

    let sum: i32 = res.get("sum");
    println!("{:?}", sum);

    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
    .map_err(|e| sqlx::Error::Configuration(Box::new(e)))
}
