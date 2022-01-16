import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("cards")
class Card {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  user_email: string;

  @Column()
  link: string;

  @Column()
  title: string;

  @Column()
  icon: string;

  @CreateDateColumn()
  color: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Card };
