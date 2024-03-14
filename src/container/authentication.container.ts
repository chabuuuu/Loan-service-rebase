import { adminService } from "@/container/admin.container";
import { borrowerService } from "@/container/borrower.container";
import { lenderService } from "@/container/lender.container";
import { AuthenticationController } from "@/controller/authentication.controller";
import { IAuthenticationController } from "@/controller/interfaces/i.authentication.controller";
import { AuthenticationService } from "@/service/authentication.service";
import { IAdminService } from "@/service/interfaces/i.admin.service";
import { IAuthenticationService } from "@/service/interfaces/i.authentication.service";
import { IBorrowerService } from "@/service/interfaces/i.borrower.service";
import { ILenderService } from "@/service/interfaces/i.lender.service";
import { ITYPES } from "@/types/interface.types";
import { SERVICE_TYPES } from "@/types/service.types";
import { Container } from "inversify";

const authenticationContainer = new Container();

authenticationContainer.bind<IAuthenticationService<any>>(ITYPES.Service).to(AuthenticationService);
authenticationContainer.bind<IAuthenticationController<any>>(ITYPES.Controller).to(AuthenticationController);
authenticationContainer.bind<ILenderService<any>>(SERVICE_TYPES.Lender).toConstantValue(lenderService);
authenticationContainer.bind<IBorrowerService<any>>(SERVICE_TYPES.Borrower).toConstantValue(borrowerService);
authenticationContainer.bind<IAdminService<any>>(SERVICE_TYPES.Admin).toConstantValue(adminService); 

const authenticationController = authenticationContainer.get<IAuthenticationController<any>>(ITYPES.Controller);
const authenticationService = authenticationContainer.get<IAuthenticationService<any>>(ITYPES.Service);

export {authenticationController, authenticationService};