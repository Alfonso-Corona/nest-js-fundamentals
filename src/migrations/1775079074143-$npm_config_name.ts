import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1775079074143 implements MigrationInterface {
    name = ' $npmConfigName1775079074143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "createdAt"`);
    }

}
