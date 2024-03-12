import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class UpdateAdminDto {
    @IsOptional()
    @IsString()
    @IsEmail(undefined , {message : "Email is not valid"})
    email? : string

    @IsOptional()
    @IsString()
    @IsStrongPassword(undefined , {message : "Password not strong enough"})
    password?: string

    @IsOptional()
    @IsString()
    fullname? : string

    @IsOptional()
    @IsString()
    address? : string
    
    @IsOptional()
    @IsString()
    @IsPhoneNumber()
    phone_number? : string

    @IsOptional()
    @IsDateString()
    birthday? : Date
}