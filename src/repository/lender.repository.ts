import { Lender } from "@/models/lender.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { ILenderRepository } from "@/repository/interfaces/i.lender.repository";
import { ITYPES } from "@/types/interface.types";
import { inject } from "inversify";
import { DataSource } from "typeorm";

export class LenderRepository extends BaseRepository<Lender> implements ILenderRepository<Lender>{
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Lender))
    }

    async _create(params: { data: any; }): Promise<any> {
        let result = await super._create(params)
        if (result.hasOwnProperty('password')) {
            delete result.password
        }
        return result
    }

    async _findAll(params: {
        skip?: number;
        take?: number;
        where?: any;
        order?: any;
      }): Promise<any> {
        try {
          const { skip, take, where, order } = params;
    
          return this._model.find({
            skip,
            take,
            select: {
                id: true,
                email: true,
                phone_number: true,
                bank: true,
                branch: true,
                address: true,
                job_title: true,
                fullname: true,
            },
            where,
            order,
          })
        } catch (error) {
          throw error
        }
    }

    async _findOne(params: { where?: any; }): Promise<any> {
        let result = await super._findOne(params)
        if (result.hasOwnProperty('password')) {
            delete result.password
        }
        return result
    }
}