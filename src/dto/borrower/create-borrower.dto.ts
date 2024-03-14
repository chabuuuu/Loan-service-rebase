import { Type } from "class-transformer"
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateBorrowerDto {
    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number! : string

    @IsNotEmpty()
    @IsEmail()
    email! : string

    @IsNotEmpty()
    @IsString()
    username! :string

    @IsNotEmpty()
    @IsStrongPassword()
    password!: string

    @IsNotEmpty()
    @IsString()
    fullname! : string

    @IsNotEmpty()
    @IsString()
    address! : string

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    income!: number

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    expense!: number

    @IsNotEmpty()
    @IsString()
    CCCD! :string
}