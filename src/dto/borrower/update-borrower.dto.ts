import { Type } from "class-transformer"
import { IsString, IsStrongPassword, IsNumberString, IsOptional, IsPhoneNumber, IsEmail, IsNumber } from "class-validator"

export class UpdateBorrowerDto {
    @IsOptional()
    @IsPhoneNumber()
    phone_number! : string

    @IsOptional()
    @IsEmail()
    email! : string

    @IsOptional()
    @IsString()
    username! :string

    @IsOptional()
    @IsStrongPassword()
    password!: string

    @IsOptional()
    @IsString()
    fullname! : string

    @IsOptional()
    @IsString()
    address! : string

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    income!: number

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    expense!: number

    @IsOptional()
    @IsString()
    CCCD! :string
}