const express=require("express");
const app=express();
const morgan=require('morgan');
const mongoose= require('mongoose');

const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handlers');
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI= require('swagger-ui-express');

//API Routes
const productRouter=require('./routers/products');
const categoryRouter=require('./routers/categories');
const userRouter=require('./routers/users');
const database=require('./database/database');
//Swagger specs
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"library API",
            version:"1.0.0",
            description:"A simple Express Library API"
        },
        servers:[
            {
                url:"http://localhost:2000/Algo-buy"
            }
        ]
    },
        apis:["./swagger/swagger-doc.js"]
    }

const specs= swaggerJsDoc(options);

//Middlewares
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json());
app.use(errorHandler);
app.use(morgan('tiny'));
app.use(authJwt()); 

//enviromental varaibles
require('dotenv/config');
const api=process.env.API_URL; 
const PORT=process.env.PORT || 2500
//Database connections
database.connect()
.then(()=>{
    console.log("Database Connected")
    app.listen(PORT,()=>{
        console.log("Server Connected")
    })
});

//Routes
app.use(`${api}/products`,productRouter);
app.use(`${api}/categories`, categoryRouter);  
app.use(`${api}/users`, userRouter);


module.exports = app
