import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLoanContractDto {
    @IsNotEmpty()
    @IsString()
    purpose!: string;

    @IsNotEmpty()
    @IsDateString()
    loan_date!: Date;

    @IsNotEmpty()
    @IsDateString()
    expire_date!: Date;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    ammount!: number;

    @IsNotEmpty()
    @IsString()
    loan_method!: string;

    @IsNotEmpty()
    @Type(() => Boolean)
    finished!: boolean;

    @IsNotEmpty()
    @IsString()
    employeeId!: string;

    @IsNotEmpty()
    @IsString()
    borrowerId!: string;

    @IsNotEmpty()
    @IsString()
    lenderId!: string;

    @IsNotEmpty()
    @IsString()
    loanPackageId!: string;
}