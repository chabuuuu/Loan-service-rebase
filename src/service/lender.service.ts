import { ILenderRepository } from "@/repository/interfaces/i.lender.repository";
import { BaseService } from "@/service/base/base.service";
import { ILenderService } from "@/service/interfaces/i.lender.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LenderService extends BaseService implements ILenderService<any>{
    constructor(@inject(ITYPES.Repository) repository: ILenderRepository<any>) {
        super(repository);
    }
}