# import FastAPI and other libraries
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# create FastAPI instance
app = FastAPI()

# todo: change once we have production ready
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include routers
# app.include_router(auth.router)


# create a route/path operation
# create root path operation
@app.get("/")
async def root():
    return {"message": "Welcome to the Team Frank Backend!"}
