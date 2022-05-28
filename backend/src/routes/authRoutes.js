import { Router } from "express";
import AuthController from "../controllers/authController.js";
// import validateToken from "../middlewares/validateToken.js";

const router = Router();
const authController = new AuthController();

//route for login authorization
router.post("/", authController.authenticate);

//route for adding user.
router.post("/addAuth", authController.addUser);

//add validateToken middleware for auths.
// router.sth("/routername", validateToken,authController.doSomething)

export default router;
