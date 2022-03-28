const express=require("express");
const app=express();
const morgan=require('morgan');
const mongoose= require('mongoose');
app.use(morgan('tiny'));
const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handlers');
//Middlewares
app.use(express.json());
app.use(errorHandler)
//Routers
const productRouter=require('./routers/products');
const categoryRouter=require('./routers/categories');
const userRouter=require('./routers/users');

//enviromental varaibles
require('dotenv/config');
const api=process.env.API_URL;

//Cloud Database connection
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'algobuy'
})
.then(()=>{
    console.log("Connected to database");
}) 
.catch((error)=>{
    console.log(error); 
});    
app.use(authJwt());
//Routes 
app.use(`${api}/products`,productRouter);
app.use(`${api}/categories`, categoryRouter);  
app.use(`${api}/users`, userRouter);

//server
app.listen(2000,()=>{
    console.log("Server connected");
})


