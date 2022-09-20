const express = require('express');

const app = express();

const PORT = 3333;

app.get("/message/:id/:user", (request,response)=>{

    const {id, user}= request.params // Destruct object

    response.send(`
        Message ID: ${id}.
        For user: ${user}.
    `);
}) 

/// localhost:3333/message/50/Andre

app.get("/user" , (request, response)=>{
    const {page,limit} = request.query

    response.send(`Page: ${page}Limit: ${limit}`)
})

///localhost:3333/user?page=1&limit=10
/// /user (recurso) ? ( primeiro separador) & (demais separadores) 

///npm install nodemon --save-dev
// npm run dev

app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})