import { Connection, createConnection } from "typeorm";

import { User } from "../../../modules/users/infra/typeorm/entities/User";

export default async (): Promise<void> => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "password",
    database: "hyperlinks",
    entities: [User],
  });
};
