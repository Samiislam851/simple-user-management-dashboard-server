# User Management REST API with Express

This is a simple REST API built with Express.js for managing user accounts. It provides endpoints for user registration, login, fetching users, editing user details, and deleting users. MongoDB is used for data storage, and JWT is used for authentication.

# Setup

1. Clone the repository.
    ````
    git clone <repository link>
    ````
2. Install dependencies using
   ````
    npm install
   ````

4. Create a `.env` file and specify the environment variables
   ````
    MONGO_URI= yourURI
    JWT_SECRET_KEY= yourKey
   ````

5. Start the server using 
   ````
    npm start
   ```` 
     or
   ````
    node index.js

   ````


## Endpoints

- **Register User:** `/saveUser`
- **User Login:** `/login`
- **Create User:** `/create-user`
- **Get All Users:** `/get-users`
- **Get Single User:** `/get-user?userId=<userId>`
- **Edit User Details:** `/edit-user/?userId=<userId>`
- **Delete User:** `/delete-user/?userId=<userId>`
  
## Client-side-repository
   [click here for the client-side repository](https://github.com/Samiislam851/simple-user-management-client/)
   
## Live-Client-SideLink 
   [click here for live preview](https://user-atlas.vercel.app/)

