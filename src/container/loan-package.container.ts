import { ILoanPackageController } from "@/controller/interfaces/i.loan-package.controller";
import { LoanPackageController } from "@/controller/loan-package.controller";
import { AppDataSource } from "@/database/db.datasource";
import { Loan_package } from "@/models/loan-package.model";
import { ILoanPackageRepository } from "@/repository/interfaces/i.loan-package.repository";
import { LoanPackageRepository } from "@/repository/loan-package.repository";
import { ILoanPackageService } from "@/service/interfaces/i.loan-package.service";
import { LoanPackageService } from "@/service/loan-package.service";
import { ITYPES } from "@/types/interface.types";
import { Container } from "inversify";
import { DataSource } from "typeorm";

const loanPackageContainer = new Container()

loanPackageContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource)
loanPackageContainer.bind<ILoanPackageRepository<Loan_package>>(ITYPES.Repository).to(LoanPackageRepository)
loanPackageContainer.bind<ILoanPackageService<any>>(ITYPES.Service).to(LoanPackageService)
loanPackageContainer.bind<ILoanPackageController<any>>(ITYPES.Controller).to(LoanPackageController)

const loanPackageController = loanPackageContainer.get<ILoanPackageController<any>>(ITYPES.Controller)
const loanPackageService = loanPackageContainer.get<ILoanPackageService<any>>(ITYPES.Service)
export {loanPackageController, loanPackageService}