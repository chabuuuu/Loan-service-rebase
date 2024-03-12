import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30})
    email! : string

    @Column("varchar", {length: 100})
    password!: string


    @Column("varchar", {length: 15})
    phone_number! : string

    @Column("varchar", {length: 20})
    job_title! : string

    @Column("decimal")
    salary! : number

    @Column("text", {nullable: true})
    profile_picture? : string

    @Column("varchar", {length: 30})
    fullname! : string
}