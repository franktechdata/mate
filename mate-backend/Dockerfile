# Use a specific version of the Python image for reproducible builds
FROM python:3.12-bookworm

# Create a user to run the application (security best practice)
RUN useradd -m franktech

# Set the working directory (this will create the directory if it does not exist)
WORKDIR /usr/src/app

# Copy only the files needed for pip install to make use of Docker cache
# Assuming you have a requirements.txt file; if not, create one
COPY requirements.txt .

# Install dependencies (in a single RUN to reduce layers)
RUN pip install --no-cache-dir -r requirements.txt

# Now copy the rest of the application's code
COPY . .

# Change the ownership of the application directory
RUN chown -R franktech:franktech .

# Switch to the newly created user
USER franktech

# Set the default command for the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
