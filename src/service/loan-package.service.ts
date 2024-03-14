import { ILoanPackageRepository } from "@/repository/interfaces/i.loan-package.repository";
import { BaseService } from "@/service/base/base.service";
import { ILoanPackageService } from "@/service/interfaces/i.loan-package.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LoanPackageService extends BaseService implements ILoanPackageService<any> {
    constructor(@inject(ITYPES.Repository) repository: ILoanPackageRepository<any>) {
        super(repository);
    }
}