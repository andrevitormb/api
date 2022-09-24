require("express-async-errors") //npm install express-async-errors --save

const database = require("./database/sqlite")

const express = require('express');

const AppError = require("./utils/AppError")

const routes = require("./routes");

const app = express();
app.use(express.json()) //declare it will be used format JSON()

database() // call function to create database instance

app.use(routes)

app.use((error, request, response , next) =>{

    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });

        
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

//using ////insomnia was done a test with method "POST" 
//localhost:3333/user 

///npm install nodemon --save-dev
// npm run dev

const PORT = 3333;
app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})