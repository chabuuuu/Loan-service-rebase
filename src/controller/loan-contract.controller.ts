import { BaseController } from "@/controller/base/base.controller";
import { ILoanContractController } from "@/controller/interfaces/i.loan-contract.controller";
import { ILoanContractService } from "@/service/interfaces/i.loan-contract.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LoanContractController extends BaseController implements ILoanContractController<any> {
    constructor(
        @inject(ITYPES.Service) service: ILoanContractService<any>
    ) {
        super(service)
    }
}