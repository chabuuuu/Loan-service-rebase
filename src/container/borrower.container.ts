import { BorrowerController } from "@/controller/borrower.controller";
import { IBorrowerController } from "@/controller/interfaces/i.borrower.controller";
import { AppDataSource } from "@/database/db.datasource";
import { Borrower } from "@/models/borrower.model";
import { BorrowerRepository } from "@/repository/borrower.repository";
import { IBorrowerRepository } from "@/repository/interfaces/i.borrower.repository";
import { BorrowerService } from "@/service/borrower.service";
import { IBorrowerService } from "@/service/interfaces/i.borrower.service";
import { ITYPES } from "@/types/interface.types";
import { Container } from "inversify";
import { DataSource } from "typeorm";

const borrowerContainer = new Container()
borrowerContainer.bind<IBorrowerService<any>>(ITYPES.Service).to(BorrowerService)
borrowerContainer.bind<IBorrowerRepository<Borrower>>(ITYPES.Repository).to(BorrowerRepository)
borrowerContainer.bind<IBorrowerController<any>>(ITYPES.Controller).to(BorrowerController)
borrowerContainer.bind<DataSource>(ITYPES.Datasource).toConstantValue(AppDataSource)

const borrowerController = borrowerContainer.get<IBorrowerController<any>>(ITYPES.Controller)
const borrowerService = borrowerContainer.get<IBorrowerService<any>>(ITYPES.Service)
export {borrowerController, borrowerService}