import adminRouter from "@/routes/admin/admin.route";
import BaseError from "@/utils/error/base.error";

const root_api = '/api/v1';
export function route (app : any){
    app.use(`${root_api}/account`, adminRouter);
    app.all('*', (req: any, res: any, next: any) => {
        const status = 'fail';
        const statusCode = 404;
        const err = new BaseError(statusCode, status, 'API Not Exists');
        next(err);
    });
}