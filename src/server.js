const express = require('express');

const app = express();

const routes = require("./routes");

app.use(express.json()) //declare it will be used format JSON()
app.use(routes)

//using ////insomnia was done a test with method "POST" 
//localhost:3333/user 

///npm install nodemon --save-dev
// npm run dev

const PORT = 3333;
app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})