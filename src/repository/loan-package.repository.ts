import { Loan_package } from "@/models/loan-package.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { ILoanPackageRepository } from "@/repository/interfaces/i.loan-package.repository";
import { ITYPES } from "@/types/interface.types";
import { inject } from "inversify";
import { DataSource } from "typeorm";

export class LoanPackageRepository extends BaseRepository<Loan_package> implements ILoanPackageRepository<Loan_package>{
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Loan_package))
    }
}