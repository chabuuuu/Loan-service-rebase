import { ILoanContractController } from "@/controller/interfaces/i.loan-contract.controller";
import { LoanContractController } from "@/controller/loan-contract.controller";
import { AppDataSource } from "@/database/db.datasource";
import { Loan_contract } from "@/models/loan-contract.model";
import { ILoanContractRepository } from "@/repository/interfaces/i.loan-contract.repository";
import { LoanContractRepository } from "@/repository/loan-contract.repository";
import { ILoanContractService } from "@/service/interfaces/i.loan-contract.service";
import { LoanContractService } from "@/service/loan-contract.service";
import { ITYPES } from "@/types/interface.types";
import { Container } from "inversify";
import { DataSource } from "typeorm";

const loanContractContainer = new Container();

loanContractContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource)
loanContractContainer.bind<ILoanContractRepository<Loan_contract>>(ITYPES.Repository).to(LoanContractRepository)
loanContractContainer.bind<ILoanContractService<any>>(ITYPES.Service).to(LoanContractService)
loanContractContainer.bind<ILoanContractController<any>>(ITYPES.Controller).to(LoanContractController)

const loanContractController = loanContractContainer.get<ILoanContractController<any>>(ITYPES.Controller)
const loanContractService = loanContractContainer.get<ILoanContractService<any>>(ITYPES.Service)
export { loanContractController, loanContractService }