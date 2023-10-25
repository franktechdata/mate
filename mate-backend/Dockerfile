ARG APP_NAME=mate-backend

# Use the official Rust image as the build environment
FROM rust:1.73.0-slim-bullseye AS builder
ARG APP_NAME

# Set the working directory inside the container
WORKDIR /app
RUN mkdir bin

# Compile the application in release mode
RUN --mount=type=bind,source=src,target=src \
    --mount=type=bind,source=Cargo.toml,target=Cargo.toml \
    --mount=type=bind,source=Cargo.lock,target=Cargo.lock \
    --mount=type=bind,source=migrations,target=migrations \
    --mount=type=cache,target=/app/target \
    --mount=type=cache,target=/usr/local/cargo/registry \
    set -e && \
    cargo build --locked --release && \
    cp ./target/release/$APP_NAME /app/bin/server


# Start a new stage with a minimal Alpine image
FROM debian:12.2-slim AS server


ARG UID=10001
# Create the user and group
RUN groupadd -g ${UID} appgroup && \
    useradd -u ${UID} -g appgroup -s /sbin/nologin -M appuser


# Create the /data directory and adjust permissions
RUN mkdir /data && chown appuser:appgroup /data

USER appuser

# Reflect the change in COPY command
COPY --from=builder /app/bin/server /bin/

EXPOSE 8080

CMD ["/bin/server"]

