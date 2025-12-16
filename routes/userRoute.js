import express from  "express";
import { fetch,create ,getAllUsers} from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);
route.get("/GetAllUsers",getAllUsers)


export default route;