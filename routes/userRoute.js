import express from  "express";
import { fetch,create ,getAllUsers,GetUserById} from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);
route.get("/GetAllUsers",getAllUsers)
route.post("/GetUserById",GetUserById)


export default route;