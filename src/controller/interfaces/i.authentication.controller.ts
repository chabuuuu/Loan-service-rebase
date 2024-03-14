
export interface IAuthenticationController<T>{
    getAccount(req: any, res: any, next: any): Promise<any>;
    getBlockStatus (req: any, res: any, next: any): Promise<any>;
}