import { Card } from "../infra/typeorm/repositories/entities/Card";

interface ICreateUserDTO {
  user_id: string;
  link: string;
  icon: string;
  title: string;
  color: string;
}

interface ICardsRepositoru {
  create({ user_id, link, title, icon, color }: ICreateUserDTO): Promise<Card>;
  findByEmail(email: string): Promise<Card>;
  findById(id: string): Promise<Card>;
}
