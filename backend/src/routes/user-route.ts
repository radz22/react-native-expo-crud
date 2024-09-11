import { Router } from "express";
import {
  GetAllUserData,
  UserCreate,
  GetUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/user-controller";
const userRoutes = Router();
userRoutes.post("/create", UserCreate);
userRoutes.get("/", GetAllUserData);
userRoutes.get("/:id", GetUser);
userRoutes.put("/:id", UpdateUser);
userRoutes.delete("/:id", DeleteUser);

export default userRoutes;
