const {Router} = require("express")

const routes = Router()

const usersRouter = require("./users.routes")
const notesRoutes = require("./notes.routes")

routes.use("/users", usersRouter)
routes.use("/notes", notesRoutes)

module.exports = routes;