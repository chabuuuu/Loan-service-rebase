import { BaseController } from "@/controller/base/base.controller"
import { IAuthenticationController } from "@/controller/interfaces/i.authentication.controller";
import { IAuthenticationService } from "@/service/interfaces/i.authentication.service";
import { ITYPES } from "@/types/interface.types";
import BaseError from "@/utils/error/base.error";
import { inject, injectable, named } from "inversify";

@injectable()
export class AuthenticationController implements IAuthenticationController<any> {
    protected service: any;

    public constructor(
        @inject(ITYPES.Service) service: IAuthenticationService<any>
    ) {
        this.service = service;
    }
    
    async getAccount(req: any, res: any, next: any){
        try {
            const { accountId, role } = req.query
            const account = await this.service.getAccount(accountId, role)
            res.json(account)
        } catch (error) {
            next(error)
        }
    }

    async getBlockStatus (req: any, res: any, next: any){
        try {                        
            const { accountId, role } = req.query
            let account = await this.service.getAccount(accountId, role)
            delete account.email
            delete account.id
            res.json(account)
        } catch (error) {
            next(error)
        }
    }
}