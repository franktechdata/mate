use actix_web::{web::Data, App, HttpServer};
use sqlx::{sqlite::SqlitePoolOptions, Pool, Sqlite};
use std::result::Result;

mod services {
    pub mod users;
}
mod models;

pub struct AppState {
    db: Pool<Sqlite>,
}

#[actix_web::main]
async fn main() -> Result<(), sqlx::Error> {
    let url = "sqlite:data/sqlite.db";
    let pool = SqlitePoolOptions::new()
        .max_connections(5)
        .connect(url)
        .await?;

    sqlx::migrate!("./migrations").run(&pool).await?;

    HttpServer::new(move || {
        App::new()
            .app_data(Data::new(AppState { db: pool.clone() }))
            .service(services::users::hello)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
    .map_err(|e| sqlx::Error::Configuration(Box::new(e)))
}
