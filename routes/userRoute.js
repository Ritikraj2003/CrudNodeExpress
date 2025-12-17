import express from  "express";
import { fetch,create ,getAllUsers,GetUserById} from "../controller/userController.js";
import { verifyToken } from "../middleware/auth.js";

const route = express.Router();

route.get("/fetch", verifyToken, fetch);
route.post("/create", verifyToken, create);
route.get("/GetAllUsers", verifyToken, getAllUsers)
route.post("/GetUserById", verifyToken, GetUserById)


export default route;