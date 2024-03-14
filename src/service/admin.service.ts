import { IAdminRepository } from "@/repository/interfaces/i.admin.repository";
import { BaseService } from "@/service/base/base.service";
import { IAdminService } from "@/service/interfaces/i.admin.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class AdminService extends BaseService implements IAdminService<any>{
    constructor(@inject(ITYPES.Repository) repository: IAdminRepository<any>) {
        super(repository);
    }
    async getBlockedStatus(params: any): Promise<any> {
        return await this.repository.getBlockedStatus(params);
    }
}