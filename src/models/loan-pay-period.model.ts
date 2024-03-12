import { Loan_contract } from "@/models/loan-contract.model";
import { Payment } from "@/models/payment.model";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Loan_pay_period{
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column("bool", {default: false})
    status!: boolean

    @CreateDateColumn()
    create_at! : Date
    
    @Column("date")
    expire_at! : Date

    //Fks:

    @ManyToOne(() => Loan_contract, (loan_contract) => loan_contract.loan_pay_periods)
    contract!: Loan_contract
    @Column()
    contractId!: string

    @OneToMany(() => Payment, (payment) => payment.loan_pay_period)
    payments!: Payment[]
}