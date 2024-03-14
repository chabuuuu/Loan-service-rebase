import { BaseController } from "@/controller/base/base.controller";
import { ILoanPackageController } from "@/controller/interfaces/i.loan-package.controller";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LoanPackageController extends BaseController implements ILoanPackageController<any> {
    constructor(
        @inject(ITYPES.Service) service: ILoanPackageController<any>
    ) {
        super(service)
    }
}