const express = require('express');

const app = express();

const PORT = 3333;
 
app.use(express.json()) //declare it will be used format JSON()

app.post("/user",(request, response)=>{
    
    const { name , age , password } = request.body;
    
    response.json({name, password , age}) 
})

//using ////insomnia was done a test with method "POST" 
//localhost:3333/user 

///npm install nodemon --save-dev
// npm run dev

app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})