const express = require('express');// establish an express app
const app = express();// establish an express app
const cors = require('cors'); // allow requests from outside resources like postman, or your frontend if you choose to build that out
const morgan = require('morgan');
const upload = require('./config/multer');
const { logError, errorHandler, wrapError } = require('./utils/middleware/errorHandlers');
const userRoutes = require('./src/controllers/user.controller')
const { profilesApi, usersApi, postsApi } = require('./src/controllers');

// Conection MongoDB
require('./config/database')

//Middleware
app.use(cors());

app.use(express.json());// app will serve and receive data in a JSON format
app.use(morgan('dev'));

app.use('/public', express.static(`${__dirname}/src/upload`))

//error middleware
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

// routes
app.use('/api/users', upload.single('img') ,usersApi)
app.use('/api/profiles', profilesApi)
app.use('/api/posts', postsApi)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Successfully served on port: ${PORT}.`);
})