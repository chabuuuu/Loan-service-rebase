import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loan_package {

    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column("varchar", {length: 20})
    name!: string

    @Column("varchar", {length: 30})
    guarantee_type!: string

    @Column("decimal", {precision: 3, scale: 2})
    interest_rate!: number

    @Column("integer")
    duration_by_day! : number

    @Column("text")
    description! : string

    @Column("decimal", {precision: 30, scale: 0})
    max_money! : number

    @Column("decimal", {precision: 30, scale: 0})
    min_money! : number

    @Column("integer")
    interest_period_by_day! : number
}