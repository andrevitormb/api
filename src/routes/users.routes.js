//Routes
const {Router} = require("express");
const usersRouter = Router();

//Controllers
const UsersControllers = require("../controllers/UsersControllers");
const usersControllers = new UsersControllers(); //instanciar na memoria para usar os methods

//middleware

function myMiddleware(request, response, next) {
    console.log("you passed under middleware");

    if(!request.body.isAdmin) {
        return response.json({"message":"User unauthorized"});
    }

    next();

    /* body json send 
        {
	"name": "Andre Vitor ",
	"age": "28",
	"password":"12345",
	"isAdmin": true
        }
    */
}

//Path
usersRouter.post("/",myMiddleware,usersControllers.create);

module.exports = usersRouter;