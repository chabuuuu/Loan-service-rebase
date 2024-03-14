import { CreateLenderDto } from "@/dto/lender/create-lender.dto"
import { IsEmail, IsPhoneNumber, IsStrongPassword, IsString, IsOptional } from "class-validator"

export class UpdateLenderDto implements CreateLenderDto {
    @IsOptional()
    @IsEmail()
    email!: string

    @IsOptional()
    @IsPhoneNumber()
    phone_number!: string

    @IsOptional()
    @IsStrongPassword()
    password!: string

    @IsOptional()
    @IsString()
    bank!: string

    @IsOptional()
    @IsString()
    branch!: string

    @IsOptional()
    @IsString()
    address!: string

    @IsOptional()
    @IsString()
    job_title!: string

    @IsOptional()
    @IsString()
    fullname!: string
}