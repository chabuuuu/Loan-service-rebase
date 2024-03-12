import { Borrower } from "@/models/borrower.model";
import { Employee } from "@/models/employee.model";
import { Lender } from "@/models/lender.model";
import { Loan_package } from "@/models/loan-package.model";
import { Loan_pay_period } from "@/models/loan-pay-period.model";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Loan_contract {
    @PrimaryGeneratedColumn("uuid")
    id! : string

    @Column("varchar", {length: 30})
    purpose! : string

    @CreateDateColumn()
    loan_date!: Date

    @Column("date")
    expire_date! : Date

    @Column("decimal", {precision: 30, scale: 0})
    ammount!: number

    @Column("varchar", {length: 20})
    loan_method!: string

    @Column("bool", {default: false})
    finished!: boolean

    @CreateDateColumn()
    create_at! : Date

    @UpdateDateColumn()
    update_at! : Date

    //FKs:
    @OneToOne(() => Employee)
    @JoinColumn()
    employee!: Employee
    @Column()
    employeeId!: string

    @OneToOne(()=> Borrower)
    @JoinColumn()
    borrower!: Borrower
    @Column()
    borrowerId!: string


    @OneToOne(() => Lender)
    @JoinColumn()
    lender!: Lender
    @Column()
    lenderId!: string

    @OneToOne(() => Loan_package)
    @JoinColumn()
    loan_package!: Loan_package
    @Column()
    loanPackageId!: string

    @OneToMany(() => Loan_pay_period, (loan_pay_period) => loan_pay_period.contract)
    loan_pay_periods!: Loan_pay_period[]
}