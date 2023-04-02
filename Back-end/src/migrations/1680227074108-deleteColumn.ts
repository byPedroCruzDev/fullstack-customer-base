import { MigrationInterface, QueryRunner } from "typeorm";

export class deleteColumn1680227074108 implements MigrationInterface {
    name = 'deleteColumn1680227074108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "client" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "deletedAt"`);
    }

}
