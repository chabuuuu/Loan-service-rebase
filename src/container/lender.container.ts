import { ILenderController } from "@/controller/interfaces/i.lender.controller";
import { LenderController } from "@/controller/lender.controller";
import { AppDataSource } from "@/database/db.datasource";
import { Lender } from "@/models/lender.model";
import { ILenderRepository } from "@/repository/interfaces/i.lender.repository";
import { LenderRepository } from "@/repository/lender.repository";
import { ILenderService } from "@/service/interfaces/i.lender.service";
import { LenderService } from "@/service/lender.service";
import { ITYPES } from "@/types/interface.types";
import { Container } from "inversify";
import { DataSource } from "typeorm";

const lenderContainer = new Container();

lenderContainer.bind<ILenderService<any>>(ITYPES.Service).to(LenderService)
lenderContainer.bind<ILenderRepository<Lender>>(ITYPES.Repository).to(LenderRepository)
lenderContainer.bind<ILenderController<any>>(ITYPES.Controller).to(LenderController)
lenderContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource)

const lenderController = lenderContainer.get<ILenderController<any>>(ITYPES.Controller)
const lenderService = lenderContainer.get<ILenderService<any>>(ITYPES.Service)
export {lenderController, lenderService}