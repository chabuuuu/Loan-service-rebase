import { IAdminService } from "@/service/interfaces/i.admin.service";
import { IAuthenticationService } from "@/service/interfaces/i.authentication.service";
import { IBorrowerService } from "@/service/interfaces/i.borrower.service";
import { ILenderService } from "@/service/interfaces/i.lender.service";
import { ITYPES } from "@/types/interface.types";
import { SERVICE_TYPES } from "@/types/service.types";
import { inject, injectable, named } from "inversify";

@injectable()
export class AuthenticationService implements IAuthenticationService<any>{
    readonly lenderService : ILenderService<any>
    readonly borrowerService : IBorrowerService<any>
    readonly adminService : IAdminService<any>
constructor(
    @inject(SERVICE_TYPES.Lender) lenderService : ILenderService<any>,
    @inject(SERVICE_TYPES.Borrower) borrowerService : IBorrowerService<any>,
    @inject(SERVICE_TYPES.Admin) adminService : IAdminService<any>,
)
{
    this.lenderService = lenderService;
    this.borrowerService = borrowerService;
    this.adminService = adminService;
}
async getAccount(id: number, role: string): Promise<any> {
    let account
    switch (role) {
        case 'Admin':
            account = await this.adminService.findOne({ where: { id: id }})
            break;
        case 'Lender':
            account = await this.lenderService.findOne({ where: { id: id }})
            break;
        case 'Borrower':
            account = await this.borrowerService.findOne({ where: { id: id }})
            break;
        default:
            break;
    }
    return {"status" : "success", "id": account.id, "email": account.email, "role": role, "isBlock": account.isBlock};
}
}