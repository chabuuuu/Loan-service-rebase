import { Borrower } from "@/models/borrower.model";
import { Loan_contract } from "@/models/loan-contract.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Bad_debt {
    @Column("text")
    description!: string

    //FKs:
    @ManyToOne(()=> Borrower, (borrower) => borrower.bad_debts)
    borrower!: Borrower
    @PrimaryColumn()
    borrowerId!: string

    @OneToOne(() => Loan_contract)
    @JoinColumn()
    contract!: Loan_contract

    @PrimaryColumn()
    contractId!: string
}