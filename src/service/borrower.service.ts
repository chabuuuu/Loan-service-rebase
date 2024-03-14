import { IBorrowerRepository } from "@/repository/interfaces/i.borrower.repository";
import { BaseService } from "@/service/base/base.service";
import { IBorrowerService } from "@/service/interfaces/i.borrower.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class BorrowerService extends BaseService implements IBorrowerService<any>{
    constructor(@inject(ITYPES.Repository) repository: IBorrowerRepository<any>) {
        super(repository);
    }
}