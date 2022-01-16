import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const loginUserUseCase = container.resolve(LoginUserUseCase);

    const user = await loginUserUseCase.execute({ name, email });

    return response.status(201).json(user);
  }
}

export { LoginUserController };
