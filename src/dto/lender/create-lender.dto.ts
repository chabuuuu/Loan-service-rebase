import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateLenderDto {

    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number!: string

    @IsNotEmpty()
    @IsStrongPassword()
    password!: string

    @IsNotEmpty()
    @IsString()
    bank!: string

    @IsNotEmpty()
    @IsString()
    branch!: string

    @IsNotEmpty()
    @IsString()
    address!: string

    @IsNotEmpty()
    @IsString()
    job_title!: string

    @IsNotEmpty()
    @IsString()
    fullname!: string
}