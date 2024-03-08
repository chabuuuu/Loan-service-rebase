import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Borrower {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30})
    email! : string

    @Column("varchar", {length: 20})
    password!: string

    @Column("varchar", {length: 30})
    fullname! : string

    @Column("varchar", {length: 150})
    address! : string

    @Column("varchar", {length: 15, nullable: true})
    phone_number? : string

}