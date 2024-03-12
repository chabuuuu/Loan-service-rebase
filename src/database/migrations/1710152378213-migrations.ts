import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710152378213 implements MigrationInterface {
    name = 'Migrations1710152378213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "borrower" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "borrower" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lender" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "lender" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lender" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "lender" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "borrower" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "borrower" ADD "password" character varying(20) NOT NULL`);
    }

}
