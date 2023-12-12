require("dotenv").config();
const express=require('express');
const app = express();
const path = require('path');
const {restrictToLoggedinUserOnly , checkAuth } = require('./middleware/auth')
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set("view engine" , "ejs");

const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user')


app.use('/',checkAuth,staticRouter);
app.use('/user',userRoute);



console.log(process.env.PORT);
app.listen(process.env.PORT,()=>{
    console.log("Port connected");
})


