import { BaseController } from "@/controller/base/base.controller";
import { ILenderController } from "@/controller/interfaces/i.lender.controller";
import { ILenderService } from "@/service/interfaces/i.lender.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LenderController extends BaseController implements ILenderController<any>{
    constructor(
        @inject(ITYPES.Service) service: ILenderService<any>
    ) {
        super(service)
    }
}