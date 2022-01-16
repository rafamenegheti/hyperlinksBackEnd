import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

type LoginUserProps = Omit<ICreateUserDTO, "avatar" | "description" | "url">;

@injectable()
class LoginUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email }: LoginUserProps): Promise<User> {
    let user = await this.usersRepository.findByEmail(email);

    if (!user) {
      const url = name.replace(" ", "").toLowerCase().concat(uuidv4());

      user = await this.usersRepository.create({ name, email, url });
    }

    return user;
  }
}

export { LoginUserUseCase };
