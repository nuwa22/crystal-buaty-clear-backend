import express from 'express';
import { getCurrentUser, getUser, googleLogin, loginUser, saveUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/", saveUser)
userRouter.post("/login", loginUser);
userRouter.post("/google", googleLogin);
userRouter.get("/get-user", getUser);
userRouter.get("/current", getCurrentUser);

export default userRouter;