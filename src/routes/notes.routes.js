const {Router} = require("express"); 
const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();
const notesControllers = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesControllers.index);
notesRoutes.post("/", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);

module.exports = notesRoutes;