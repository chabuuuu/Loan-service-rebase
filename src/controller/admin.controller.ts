import { inject, injectable } from "inversify";
import { BaseController } from "@/controller/base/base.controller";
import { hashPassword } from "@/utils/hashing/password-hashing";
import { IAdminController } from "@/controller/interfaces/i.admin.controller";
import { IAdminService } from "@/service/interfaces/i.admin.service";
import { ITYPES } from "@/types/interface.types";

@injectable()
export class AdminController extends BaseController implements IAdminController<any>{
    constructor(
        @inject(ITYPES.Service) service: IAdminService<any>
    ) {
        super(service)
    }
    async getBlockedStatus(req: any, res: any, next: any): Promise<any> {
        try {
            const id = req.params.id;
            const result = await this.service.getBlockedStatus({where: {id: id}})
            res.json(result);
        } catch (error) {
            next(error)
        }
    }
    async create(req: any, res: any, next: any): Promise<any> {
        try {            
            if (!req.body) throw new Error("Data is required");
            const data = req.body;
            const password = data.password;
            const hashedPassword = await hashPassword(password);
            console.log('Hashed pass: ', hashedPassword);
            
            data.password = hashedPassword;
            const result = await this.service.create({data});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}