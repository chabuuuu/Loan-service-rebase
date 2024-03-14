import { Loan_contract } from "@/models/loan-contract.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { ILoanContractRepository } from "@/repository/interfaces/i.loan-contract.repository";
import { ITYPES } from "@/types/interface.types";
import { inject } from "inversify";
import { DataSource } from "typeorm";

export class LoanContractRepository extends BaseRepository<Loan_contract> implements ILoanContractRepository<Loan_contract>{
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource){
        super(dataSource.getRepository(Loan_contract));
    }
}