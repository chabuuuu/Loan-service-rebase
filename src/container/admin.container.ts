import { Container } from "inversify";

import { DataSource } from "typeorm";
import { ITYPES } from "@/types/interface.types";
import { AppDataSource } from "@/database/db.datasource";
import { Admin } from "@/models/admin.model";
import { AdminRepository } from "@/repository/admin.repository";
import { AdminController } from "@/controller/admin.controller";
import { AdminService } from "@/service/admin.service";
import { IAdminController } from "@/controller/interfaces/i.admin.controller";
import { IAdminService } from "@/service/interfaces/i.admin.service";
import { IAdminRepository } from "@/repository/interfaces/i.admin.repository";

const adminContainer = new Container();
adminContainer.bind<IAdminService<any>>(ITYPES.Service).to(AdminService);
adminContainer.bind<IAdminRepository<Admin>>(ITYPES.Repository).to(AdminRepository);
adminContainer.bind<IAdminController<any>>(ITYPES.Controller).to(AdminController);
adminContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource);
const adminController = adminContainer.get<IAdminController<any>>(ITYPES.Controller);
const adminService = adminContainer.get<IAdminService<any>>(ITYPES.Service);
export {adminController, adminService};
