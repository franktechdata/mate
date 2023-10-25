use crate::AppState;
use actix_web::{get, web::Data, HttpResponse};
use sqlx::Row;

#[get("/")]
pub async fn hello(state: Data<AppState>) -> HttpResponse {
    println!("Hello");
    match sqlx::query("SELECT 1 + 1 as sum")
        .fetch_one(&state.db)
        .await
    {
        Ok(row) => {
            let sum: i32 = row.get("sum");
            HttpResponse::Ok().body(format!("Sum is: {}", sum))
        }
        Err(_) => HttpResponse::InternalServerError().body("Error querying database"),
    }
}
