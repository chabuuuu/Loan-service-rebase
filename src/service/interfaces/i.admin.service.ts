import { IBaseService } from "@/service/interfaces/i.base.service";

export interface IAdminService<T> extends IBaseService<T> {
    getBlockedStatus(params: any): Promise<any>;
}