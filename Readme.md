# User Management REST API with Express

This is a simple REST API built with Express.js for managing user accounts. It provides endpoints for user registration, login, fetching users, editing user details, and deleting users. MongoDB is used for data storage, and JWT is used for authentication.

## Setup

1. Clone the repository.
2. Install dependencies using
    ```npm install```.
3. Set up a MongoDB database and update the connection string in ```config/db.js```.
4. Create a `.env` file and specify the environment variables such as ```MONGO_URI```.
5. Start the server using
    ```npm start``` or ```node index.js```.

## Endpoints

- **Register User:** `/saveUser`
- **User Login:** `/login`
- **Create User:** `/create-user`
- **Get All Users:** `/get-users`
- **Get Single User:** `/get-user?userId=<userId>`
- **Edit User Details:** `/edit-user/?userId=<userId>`
- **Delete User:** `/delete-user/?userId=<userId>`

## Deployment

Deployment instructions are commented out in the code.