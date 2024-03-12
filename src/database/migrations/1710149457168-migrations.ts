import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710149457168 implements MigrationInterface {
    name = 'Migrations1710149457168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_507a8d628bffdc921274fc155f8" UNIQUE ("phone_number")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_507a8d628bffdc921274fc155f8"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_de87485f6489f5d0995f5841952"`);
    }

}
