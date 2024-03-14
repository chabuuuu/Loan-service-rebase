import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLoanPackageDto {
    @IsNotEmpty()
    @IsString()
    name!: string;
    
    @IsNotEmpty()
    @IsString()
    guarantee_type!: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    interest_rate!: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    duration_by_day!: number;

    @IsNotEmpty()
    @IsString()
    description!: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    max_money!: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    min_money!: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    interest_period_by_day!: number;
}