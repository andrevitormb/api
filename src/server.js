const express = require('express');

const app = express();

const PORT = 3333;

app.get("/message/:id/:user", (request,response)=>{

    const {id, user}= request.params // Destruct object

    response.send(`
        Message ID: ${id},
        For user: ${user},
    `);
}) 

/// localhost:3333/message/50/Andre

app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})