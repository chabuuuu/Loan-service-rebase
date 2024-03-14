import { IBaseController } from "@/controller/interfaces/i.base.controller";

export interface IAdminController<T> extends IBaseController<T>{
    getBlockedStatus(req: any, res: any, next: any): Promise<any>;
}