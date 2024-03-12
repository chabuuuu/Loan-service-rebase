import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710144644732 implements MigrationInterface {
    name = 'Migrations1710144644732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP COLUMN "loan_packageId"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "loan_pay_periodId"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ALTER COLUMN "loanPackageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44"`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "loanPayPeriodId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74" FOREIGN KEY ("loanPackageId") REFERENCES "loan_package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44" FOREIGN KEY ("loanPayPeriodId") REFERENCES "loan_pay_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74"`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "loanPayPeriodId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44" FOREIGN KEY ("loanPayPeriodId") REFERENCES "loan_pay_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ALTER COLUMN "loanPackageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74" FOREIGN KEY ("loanPackageId") REFERENCES "loan_package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD "loan_pay_periodId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD "loan_packageId" character varying NOT NULL`);
    }

}
