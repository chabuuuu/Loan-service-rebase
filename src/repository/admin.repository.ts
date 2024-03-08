import { Admin } from "@/models/admin.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { ITYPES } from "@/types/interface.types";
import { inject } from "inversify";
import "reflect-metadata";
import { DataSource } from "typeorm";

export class AdminRepository extends BaseRepository<Admin>{
    constructor(@inject(ITYPES.Datasource) dataSource : DataSource){
        super(dataSource.getRepository(Admin))
    }
}
