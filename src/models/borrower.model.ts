import { Bad_debt } from "@/models/bad-debt.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Borrower {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 15, unique: true})
    phone_number! : string

    @Column("varchar", {length: 30, unique: true})
    email! : string

    @Column("varchar", {length: 20})
    username! :string

    @Column("varchar", {length: 100})
    password!: string

    @Column("varchar", {length: 30})
    fullname! : string

    @Column("varchar", {length: 150})
    address! : string

    @Column("decimal", {precision: 30, scale: 0})
    income!: number

    @Column("decimal", {precision: 30, scale: 0})
    expense!: number

    @Column("text", {unique: true})
    CCCD! :string

    //FKs:
    @OneToMany(()=> Bad_debt, (bad_debt) => bad_debt.borrower)
    bad_debts!: Bad_debt[]
}