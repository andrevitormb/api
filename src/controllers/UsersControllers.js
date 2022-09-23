class UsersControllers { 

    create(request,response) {
        const { name , age , password } = request.body;
    
        response.json({name, password , age}) 
    }
}

module.exports = UsersControllers