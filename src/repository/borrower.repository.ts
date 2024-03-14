import { Borrower } from "@/models/borrower.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { IBorrowerRepository } from "@/repository/interfaces/i.borrower.repository";
import { ITYPES } from "@/types/interface.types";
import { inject } from "inversify";
import { DataSource } from "typeorm";

export class BorrowerRepository extends BaseRepository<Borrower> implements IBorrowerRepository<Borrower> {
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Borrower));
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
                    phone_number: true,
                    email: true,
                    username: true,
                    fullname: true,
                    address: true,
                    income: true,
                    expense: true,
                    CCCD: true,
                },
                where,
                order,
            })
        } catch (error) {
            throw error
        }
    }

    async _create(params: { data: any; }): Promise<any> {
        let result = await super._create(params)
        if (result.hasOwnProperty('password')) {
            delete result.password
        }
        return result
    }

    async _findOne(params: { where?: any; }): Promise<any> {
        let result = await super._findOne(params)
        if (result.hasOwnProperty('password')) {
            delete result.password
        }
        return result
    }
}