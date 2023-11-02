# select image
FROM python:3.9.17-bullseye

RUN useradd -m franktech

WORKDIR /usr/src/app

RUN pip install 'fastapi[all]' psycopg2 alembic passlib python-jose

# Copy everything from the current directory to the working directory inside the container
COPY . .

# Change the ownership and set permissions for directories
RUN chown -R franktech:franktech /usr/src/app

# Switch to 'myuser'
USER franktech

# Set the default command for the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
