import { Container } from "inversify";

import { DataSource } from "typeorm";
import { ITYPES } from "@/types/interface.types";
import { IService } from "@/service/base/i.service";
import { IRepository } from "@/repository/base/i.repository";
import { IController } from "@/controller/base/i.controller";
import { AppDataSource } from "@/database/db.datasource";
import { Admin } from "@/models/admin.model";
import { AdminRepository } from "@/repository/admin.repository";
import { AdminController } from "@/controller/admin.controller";
import { AdminService } from "@/service/admin.service";

const adminContainer = new Container();
adminContainer.bind<IService<any>>(ITYPES.Service).to(AdminService);
adminContainer.bind<IRepository<Admin>>(ITYPES.Repository).to(AdminRepository);
adminContainer.bind<IController<any>>(ITYPES.Controller).to(AdminController);
adminContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource);
const adminController = adminContainer.get<IController<any>>(ITYPES.Controller);
export default adminController;
