import { RabbitmqSource } from "@/message-queue/rabbitmq.instance";
import { ILoanContractRepository } from "@/repository/interfaces/i.loan-contract.repository";
import { BaseService } from "@/service/base/base.service";
import { ILoanContractService } from "@/service/interfaces/i.loan-contract.service";
import { ITYPES } from "@/types/interface.types";
import { inject, injectable } from "inversify";

@injectable()
export class LoanContractService extends BaseService implements ILoanContractService<any>{
    constructor(@inject(ITYPES.Repository) repository: ILoanContractRepository<any>) {
        super(repository);
    }
    // protected messageQueue: RabbitmqSource;
    // constructor(
    //     @inject(ITYPES.MessageQueue) messageQueue: RabbitmqSource,
    //     @inject(ITYPES.Repository) repository: IRepository<any>
    // ) {
    //     super(repository);
    //     this.messageQueue = messageQueue;
    // }
    // async create(data: any): Promise<any> {

    // }
}