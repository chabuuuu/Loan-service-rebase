import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1710144397959 implements MigrationInterface {
    name = 'Migrations1710144397959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bad_debt" ("description" text NOT NULL, "borrowerId" uuid NOT NULL, "contractId" uuid NOT NULL, CONSTRAINT "PK_0dc2805293b7a5e61167304d7ea" PRIMARY KEY ("borrowerId", "contractId"))`);
        await queryRunner.query(`CREATE TABLE "borrower" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone_number" character varying(15) NOT NULL, "email" character varying(30) NOT NULL, "username" character varying(20) NOT NULL, "password" character varying(20) NOT NULL, "fullname" character varying(30) NOT NULL, "address" character varying(150) NOT NULL, "income" numeric(30,0) NOT NULL, "expense" numeric(30,0) NOT NULL, "CCCD" text NOT NULL, CONSTRAINT "UQ_68994d44c09dbc3ad4271924248" UNIQUE ("phone_number"), CONSTRAINT "UQ_0b2149b696c042d5432bb288001" UNIQUE ("email"), CONSTRAINT "UQ_26c5e23b222ed3a1be22e8ae7ba" UNIQUE ("CCCD"), CONSTRAINT "PK_c9737036f657d00897e09029378" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lender" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(30) NOT NULL, "phone_number" character varying(15) NOT NULL, "password" character varying(20) NOT NULL, "bank" character varying(20) NOT NULL, "branch" character varying(20) NOT NULL, "address" character varying(100) NOT NULL, "job_title" character varying(20) NOT NULL, "fullname" character varying(30) NOT NULL, CONSTRAINT "UQ_5ca641fba3610d006cba31bc89d" UNIQUE ("email"), CONSTRAINT "UQ_97c9a51b18a04987bb4c92cf006" UNIQUE ("phone_number"), CONSTRAINT "PK_8cb68b42ba3dd99084822711855" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan_package" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "guarantee_type" character varying(30) NOT NULL, "interest_rate" numeric(3,2) NOT NULL, "duration_by_day" integer NOT NULL, "description" text NOT NULL, "max_money" numeric(30,0) NOT NULL, "min_money" numeric(30,0) NOT NULL, "interest_period_by_day" integer NOT NULL, CONSTRAINT "PK_f0d124b587bf15057d3cf0b9473" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan_contract" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "purpose" character varying(30) NOT NULL, "loan_date" TIMESTAMP NOT NULL DEFAULT now(), "expire_date" date NOT NULL, "ammount" numeric(30,0) NOT NULL, "loan_method" character varying(20) NOT NULL, "finished" boolean NOT NULL DEFAULT false, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "employeeId" uuid NOT NULL, "borrowerId" uuid NOT NULL, "lenderId" uuid NOT NULL, "loan_packageId" character varying NOT NULL, "loanPackageId" uuid, CONSTRAINT "REL_5bb587dbd9353cb44a2ba9c928" UNIQUE ("employeeId"), CONSTRAINT "REL_dcaebf0ed39776a59e2228010c" UNIQUE ("borrowerId"), CONSTRAINT "REL_ad86a36821c6162d71db25de5b" UNIQUE ("lenderId"), CONSTRAINT "REL_aef99164f4d834ff92fad5cbe7" UNIQUE ("loanPackageId"), CONSTRAINT "PK_5086e4f8e7f0ff2665a465ddff4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan_pay_period" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" boolean NOT NULL DEFAULT false, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "expire_at" date NOT NULL, "contractId" uuid NOT NULL, CONSTRAINT "PK_07711f70f7dffe3054d5f822a36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pay_at" TIMESTAMP NOT NULL DEFAULT now(), "ammount" numeric(30,0) NOT NULL, "pay_method" character varying(20) NOT NULL, "description" text NOT NULL, "loan_pay_periodId" character varying NOT NULL, "loanPayPeriodId" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bad_debt" ADD CONSTRAINT "FK_6862ea66eeb3a99f725caa048b0" FOREIGN KEY ("borrowerId") REFERENCES "borrower"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bad_debt" ADD CONSTRAINT "FK_ac518d59e0bd8bf5712917d26b8" FOREIGN KEY ("contractId") REFERENCES "loan_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_5bb587dbd9353cb44a2ba9c928d" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_dcaebf0ed39776a59e2228010c7" FOREIGN KEY ("borrowerId") REFERENCES "borrower"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_ad86a36821c6162d71db25de5b5" FOREIGN KEY ("lenderId") REFERENCES "lender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_contract" ADD CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74" FOREIGN KEY ("loanPackageId") REFERENCES "loan_package"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan_pay_period" ADD CONSTRAINT "FK_6dd5f065c4857f01d89c4b716dc" FOREIGN KEY ("contractId") REFERENCES "loan_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44" FOREIGN KEY ("loanPayPeriodId") REFERENCES "loan_pay_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_c3dbb5d9e89c47214aa9d452d44"`);
        await queryRunner.query(`ALTER TABLE "loan_pay_period" DROP CONSTRAINT "FK_6dd5f065c4857f01d89c4b716dc"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_aef99164f4d834ff92fad5cbe74"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_ad86a36821c6162d71db25de5b5"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_dcaebf0ed39776a59e2228010c7"`);
        await queryRunner.query(`ALTER TABLE "loan_contract" DROP CONSTRAINT "FK_5bb587dbd9353cb44a2ba9c928d"`);
        await queryRunner.query(`ALTER TABLE "bad_debt" DROP CONSTRAINT "FK_ac518d59e0bd8bf5712917d26b8"`);
        await queryRunner.query(`ALTER TABLE "bad_debt" DROP CONSTRAINT "FK_6862ea66eeb3a99f725caa048b0"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "loan_pay_period"`);
        await queryRunner.query(`DROP TABLE "loan_contract"`);
        await queryRunner.query(`DROP TABLE "loan_package"`);
        await queryRunner.query(`DROP TABLE "lender"`);
        await queryRunner.query(`DROP TABLE "borrower"`);
        await queryRunner.query(`DROP TABLE "bad_debt"`);
    }

}
