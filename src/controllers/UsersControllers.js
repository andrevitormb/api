const AppError = require("../utils/AppError")

class UsersControllers { 

    create(request,response) {
        const { name , age , password } = request.body;
    
        if (!name){
            throw new AppError("Name must be provided");
        }
                
        response.status(201).json({name, password , age}) 
    }
}

module.exports = UsersControllers