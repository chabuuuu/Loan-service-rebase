import { IBaseRepository } from "@/repository/interfaces/i.base.repository";

export interface IAdminRepository<T> extends IBaseRepository<T> {
    getBlockedStatus(params: any): Promise<any>;
}