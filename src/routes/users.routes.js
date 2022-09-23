const {Router} = require("express")

const usersRouter = Router()

usersRouter.post("/",(request, response)=>{
    
    const { name , age , password } = request.body;
    
    response.json({name, password , age}) 
})

module.exports = usersRouter;