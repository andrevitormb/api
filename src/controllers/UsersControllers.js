class UsersControllers { 

    create(request,response) {
        const { name , age , password } = request.body;
    
        response.status(201).json({name, password , age}) 
    }
}

module.exports = UsersControllers