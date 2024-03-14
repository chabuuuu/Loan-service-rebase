import adminRouter from "@/routes/admin/admin.route";
import authenticationRouter from "@/routes/authentication/authentication.route";
import borrowerRouter from "@/routes/borrower/borrower.route";
import lenderRouter from "@/routes/lender/lender.route";
import loanContractRouter from "@/routes/loan-contract/loan-contract.route";
import loanPackageRouter from "@/routes/loan-package/loan-package.route";
import BaseError from "@/utils/error/base.error";

const root_api = '/api/v1';
export function route (app : any){
    app.use(`${root_api}/admin`, adminRouter);
    app.use(`${root_api}/borrower`, borrowerRouter);
    app.use(`${root_api}/lender`, lenderRouter);
    app.use(`${root_api}/loan-package`, loanPackageRouter);
    app.use(`${root_api}/loan-contract`, loanContractRouter);
    app.use(`${root_api}/authentication`, authenticationRouter);
    app.all('*', (req: any, res: any, next: any) => {
        const status = 'fail';
        const statusCode = 404;
        const err = new BaseError(statusCode, status, 'API Not Exists');
        next(err);
    });
}