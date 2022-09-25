const {hash} = requires('bcrypt');
const AppError = require("../utils/AppError")
const sqliteConnection = require('../database/sqlite')
class UsersControllers { 

    async create(request,response) {
        const { name , email , password } = request.body;
    
        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)",[email])

        if(checkUserExists){
            throw new AppError("this email is already in use")
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return response.status(201).json();
    }   
}

module.exports = UsersControllers