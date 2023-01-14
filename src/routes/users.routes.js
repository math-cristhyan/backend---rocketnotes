const {Router} = require("express"); 
const UserControllers = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UserAvatarController = require("../controllers/UserAvatarController");

const multer =  require("multer");
const uploadconfig = require("../configs/upload");

const upload = multer(uploadconfig.MULTER);

const userAvatarController = new UserAvatarController();
const userControllers = new UserControllers

const usersRoutes = Router();

usersRoutes.post("/", userControllers.create);
usersRoutes.put("/", ensureAuthenticated, userControllers.update);
usersRoutes.patch("/avatar", ensureAuthenticated, userAvatarController.update);
module.exports = usersRoutes;