import { Admin } from "@/models/admin.model";
import { BaseRepository } from "@/repository/base/base.repository";
import { IAdminRepository } from "@/repository/interfaces/i.admin.repository";
import { ITYPES } from "@/types/interface.types";
import { id, inject } from "inversify";
import "reflect-metadata";
import { DataSource } from "typeorm";
const bcrypt = require('bcrypt');


export class AdminRepository extends BaseRepository<Admin> implements IAdminRepository<Admin> {
    constructor(@inject(ITYPES.Datasource) dataSource: DataSource) {
        super(dataSource.getRepository(Admin))
    }
    async getBlockedStatus(params: any): Promise<any> {
        try {
            const {where} = params;
            return this._model.find({
                where,
                select: {
                    id: true,
                    email: true,
                    isBlock: true
                }
            })  
        } catch (error) {
            throw error
        }

    }

    //Override method to remove password from response
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
                where,
                select: {
                    id: true,
                    email: true,
                    fullname: true,
                    address: true,
                    phone_number: true,
                    birthday: true,
                    create_at: true,
                    update_at: true,
                },
                order,
            })
        } catch (error) {
            throw error
        }
    }

    //Override method to remove password from response
    async _create(params: { data: any }): Promise<any> {
        try {
            const { data } = params;
            // const saltRounds = 10;
            // await bcrypt.hash(data.password, saltRounds, async (err: any, hash: any) => {
            //     if (err) {
            //         throw err
            //     }
            //     data.password = hash;
            //     console.log('hashed pass::: ', hash);
            // });
            const newInstance = await this._model.create(data);
            const response = await this._model.save(newInstance);
            if (response.hasOwnProperty('password')) {
                delete response.password
            }
            return response
        } catch (error: any) {            
            throw error
        }
    }
}
