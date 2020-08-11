const express =require ('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator =require('express-validator') 


//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex: true
}).then(()=>console.log("Database connected"))

//middleware Morgan
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

//Roter middleware
app.use("/api", authRoutes)
app.use("/api", userRoutes)

const port =process.env.PORT || 8080;
 
app.listen(port, ()=>{console.log(`Server is running on port: ${port}` )});

