//Routes
const {Router} = require("express");
const usersRouter = Router();

//Controllers
const UsersControllers = require("../controllers/UsersControllers");
const usersControllers = new UsersControllers(); //instanciar na memoria para usar os methods


//Path
usersRouter.post("/",usersControllers.create);

module.exports = usersRouter;