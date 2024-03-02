const express = require('express')

const cors = require('cors');
require('dotenv').config();

const app = express()
const db = require('./config/db');

const User = require('./models/userModel');


const generateToken = require('./config/generateToken');
const verifyJWT = require('./middleware/VerifyJWT');
const http = require('http');
const path = require('path');



/// Basic middlewares
app.use(cors())
app.use(express.json())






const server = app.listen(process.env.PORT || 3000, () => {
    console.log('example listening to port', 3000);
})


/// register user///

app.post('/saveUser', async (req, res) => {
    // console.log(req.body)

    const user = new User(req.body)


    try {

        const userEmail = user.email

        const response = await User.findOne({ email: userEmail })

        if (!response) {

            try {
                const response = await user.save()
                const token = generateToken(response);

                // console.log(token);

                /// return a token from here also
                res.status(200).json({ success: true, message: 'saved', user: response, token })
            } catch (error) {
                res.status(500).json({ success: false, message: 'Internal Server Error', error })
            }
        } else {
            res.status(400).json({ success: false, message: 'Bad request | User Already Exists', response })
        }


    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error })
    }
})


/////////////////////////////////////////// login give token to user


app.post('/login', async (req, res) => {

    const user = new User(req.body)
    // console.log('the user ', user);

    try {

        const userEmail = user.email

        const response = await User.findOne({ email: userEmail })
        const token = generateToken(response)
        // console.log('token', token);
        if (!response) {

            res.status(400).json({ success: false, message: 'Not Found', response })

        } else {
            res.status(200).json({ success: true, message: 'user Found', user: response, token })
        }


    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', error })
    }

})




/////////////////////////// Create user /////////////////////////////

app.post('/create-user', async (req, res) => {
    const user = new User(req.body);

    try {

        const userExists = await User.findOne({ email: req.body.email })
        if (!userExists) {
            const response = await user.save();
            res.status(201).send({ success: true, response });
        } else {
            res.status(409).send({ success: false, message: `user with email ${req.body.email} already exists` })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});



////////////////////////  fetch all the users  ////////////

app.get('/get-users', async (req, res) => {
    try {

        const users = await User.find()



        res.status(200).send({ success: true, users });


    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }

})


////////////////// get a single user ////////////////


app.get('/get-user', async (req, res) => {
    const userId = req.query.userId

    try {

        const user = await User.findById(userId)

        console.log(user);
        if (user) {

            res.status(200).send({ success: true, user });

        } else {

            res.status(401).send({ success: false, message: 'user not found' });

        }



    } catch (error) {

        console.log(error);
        res.status(500).send('Internal Server Error');

    }

})



//// edit an user's details /// 


app.put('/edit-user/', async (req, res) => {
    const userId = req.query.userId;

    try {

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }

        else {
            user.firstName = req.body.firstName || user.firstName;
            user.lastName = req.body.lastName || user.lastName;
            user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
            const updatedUser = await user.save();
            res.status(200).send({ success: true, user: updatedUser });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});



// delete user 

app.delete('/delete-user/', async (req, res) => {
    const userId = req.query.userId;

    try {

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send({ success: false, message: 'User not found' });
        }

        res.status(200).send({ success: true, user: deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});









//------------------------  Deployment ----------------------
// const __dirname2 = path.resolve()

// if (true) {
//     // console.log( path.join(__dirname2, "/client/dist"));
//     app.use(express.static(path.join(__dirname2, "/client/dist")))
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname2, "client", "dist", "index.html"))
//     })
// } else {
//     app.get('/', (req, res) => {

//         console.log(process.env.NODE_ENV);
//         res.send("API is running successfully")
//     })
// }
// ------------------------- Deployment -----------------------