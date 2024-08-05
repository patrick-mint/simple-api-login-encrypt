# Simple API Login Encrypt

A simple API for user registration and login using Node.js, Express, MySQL, Docker, and bcrypt for password encryption.

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/patrick-mint/simple-api-login-encrypt.git
    cd simple-api-login-encrypt
    ```

2. **Set Up Environment Variables**

    Create a `.env` file in the root directory:

    ```plaintext
    DB_HOST=db
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_NAME=user_db
    ```

3. **Build and Run Docker Containers**

    ```bash
    docker-compose up --build
    ```

## Usage

### Register User

- **URL**: `http://localhost:3000/api/auth/register`
- **Method**: POST
- **Body**:
    ```json
    {
      "email": "test@example.com",
      "password": "password123",
      "firstname": "John",
      "lastname": "Doe"
    }
    ```

### Login User

- **URL**: `http://localhost:3000/api/auth/login`
- **Method**: POST
- **Body**:
    ```json
    {
      "email": "test@example.com",
      "password": "password123"
    }
    ```

## License

This project is licensed under the MIT License.
