require("dotenv").config({path:"./.env"})
const express=require("express")
const app= express();
PORT=8080

// Db connection
require("./Models/Config").connectDatabase();

// Morgan
const Logger=require("morgan");
const Errorhandler = require("./Utils/ErrorHandle");
const { generatedErrors } = require("./Middleware/error");
app.use(Logger("tiny"));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// session and cokie parser

const session=require("express-session");
const cookieparser=require("cookie-parser")

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:process.env.EXPRESS_SESSION_SECRET
}));

app.use(cookieparser());

app.use("/user",require("./Routes/userRoute"));
app.use("/company",require("./Routes/componyRoute"));
app.use("/outlets",require("./Routes/outletsRoute"));


app.all("*",(req,res,next)=>{
    next(new Errorhandler(`Requested Url Not found ${req.url}`,404))
});
app.use(generatedErrors)
app.listen(
    PORT,console.log(`Server running at port ${PORT}`)
)