import { injectable } from "inversify";
import { BaseController } from "@/controller/base/base.controller";
import { hashPassword } from "@/utils/hashing/password-hashing";

@injectable()
export class AdminController extends BaseController{
    async create(req: any, res: any, next: any): Promise<any> {
        try {            
            if (!req.body) throw new Error("Data is required");
            const data = req.body;
            const result = await this.service.create({data});
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}