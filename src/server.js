const express = require('express');

const app = express();

const PORT = 3333;

app.get("/message", (request,response)=>{

    response.send("hello world!");
}) 

/// localhost:3333/message

app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})