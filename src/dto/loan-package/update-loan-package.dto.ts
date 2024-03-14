import { CreateLoanPackageDto } from "@/dto/loan-package/create-loan-package.dto";
import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateLoanPackageDto implements CreateLoanPackageDto{
    @IsOptional()
    @IsString()
    name!: string;
    
    @IsOptional()
    @IsString()
    guarantee_type!: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    interest_rate!: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    duration_by_day!: number;

    @IsOptional()
    @IsString()
    description!: string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    max_money!: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    min_money!: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    interest_period_by_day!: number;

}