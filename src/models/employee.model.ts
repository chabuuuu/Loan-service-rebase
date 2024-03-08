import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30})
    email! : string

    @Column("varchar", {length: 20})
    password!: string

    @Column("varchar", {length: 30})
    fullname! : string
}