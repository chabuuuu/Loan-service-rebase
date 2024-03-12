import { Loan_pay_period } from "@/models/loan-pay-period.model";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @CreateDateColumn()
    pay_at! : Date

    @Column("decimal", {precision: 30, scale: 0})
    ammount!: number

    @Column("varchar", {length: 20})
    pay_method!: string

    @Column("text")
    description!: string

    //FKs:
    @ManyToOne(() => Loan_pay_period, (loan_pay_period) => loan_pay_period.payments)
    loan_pay_period!: Loan_pay_period
    @Column()
    loanPayPeriodId!: string
}