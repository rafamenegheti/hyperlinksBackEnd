import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCards1642366983965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cards",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "user_email",
            type: "varchar",
          },
          {
            name: "link",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "icon",
            type: "varchar",
          },
          {
            name: "color",
            type: "varchar",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserCard",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKEmailUserCard",
            referencedTableName: "users",
            referencedColumnNames: ["email"],
            columnNames: ["user_email"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cards");
  }
}
