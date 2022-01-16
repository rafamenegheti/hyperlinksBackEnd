import { response, Router } from "express";

import { LoginUserController } from "../../../../modules/users/useCases/loginUser/LoginUserController";

const loginUserController = new LoginUserController();

const usersRoutes = Router();

usersRoutes.post("/", loginUserController.handle);

export { usersRoutes };
