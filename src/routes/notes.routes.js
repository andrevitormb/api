//Routes
const {Router} = require("express");
const notesRoutes = Router();

//Controllers
const NotesControllers = require("../controllers/NotesControllers");
const notesControllers = new NotesControllers(); //instanciar na memoria para usar os methods


//Path
notesRoutes.post("/:user_id",notesControllers.create);
notesRoutes.get("/:id",notesControllers.show);

module.exports = notesRoutes;