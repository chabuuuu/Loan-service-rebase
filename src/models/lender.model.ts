import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lender {
    @PrimaryGeneratedColumn("uuid")
    id! : string

    @Column("varchar", {length: 30, unique: true})
    email! : string

    @Column("varchar", {length: 15, unique: true})
    phone_number! : string

    @Column("varchar", {length: 100})
    password!: string

    @Column("varchar", {length: 20})
    bank!: string

    @Column("varchar", {length: 20})
    branch!: string
    
    @Column("varchar", {length: 100})
    address! : string

    @Column("varchar", {length: 20})
    job_title! : string

    @Column("varchar", {length: 30})
    fullname! : string
}