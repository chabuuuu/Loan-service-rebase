import { CreateLoanContractDto } from "@/dto/loan-contract/create-loan-contract.dto";
import { Type } from "class-transformer";
import { IsString, IsDateString, IsNumber, IsOptional } from "class-validator";

export class UpdateLoanContractDto implements CreateLoanContractDto {
    @IsOptional()
    @IsString()
    purpose!: string;

    @IsOptional()
    @IsDateString()
    loan_date!: Date;

    @IsOptional()
    @IsDateString()
    expire_date!: Date;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    ammount!: number;

    @IsOptional()
    @IsString()
    loan_method!: string;

    @IsOptional()
    @Type(() => Boolean)
    finished!: boolean;

    @IsOptional()
    @IsString()
    employeeId!: string;

    @IsOptional()
    @IsString()
    borrowerId!: string;

    @IsOptional()
    @IsString()
    lenderId!: string;

    @IsOptional()
    @IsString()
    loanPackageId!: string;
}