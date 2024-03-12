import { IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, MaxLength } from "class-validator"

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail(undefined , {message : "email is not valid"})
    email! : string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword(undefined , {message : "password not strong enough"})
    password!: string

    @IsNotEmpty()
    @IsString()
    fullname! : string

    @IsNotEmpty()
    @IsString()
    address! : string
    
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber()
    phone_number! : string

    @IsNotEmpty()
    @IsDateString()
    birthday! : Date
}