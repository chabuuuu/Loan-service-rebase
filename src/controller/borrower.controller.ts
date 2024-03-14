import { BaseController } from "@/controller/base/base.controller";
import { IBorrowerController } from "@/controller/interfaces/i.borrower.controller";
import { IBorrowerService } from "@/service/interfaces/i.borrower.service";
import { ITYPES } from "@/types/interface.types";
import { hashPassword } from "@/utils/hashing/password-hashing";
import { inject, injectable } from "inversify";

@injectable()
export class BorrowerController extends BaseController implements IBorrowerController<any>{
    constructor(
        @inject(ITYPES.Service) service: IBorrowerService<any>
    ) {
        super(service)
    }
    async create(req: any, res: any, next: any): Promise<any> {
        try {            
            if (!req.body) throw new Error("Data is required");
            const data = req.body;
            const password = data.password;
            const hashedPassword = await hashPassword(password)
            data.password = hashedPassword;
            const result = await this.service.create({data});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}