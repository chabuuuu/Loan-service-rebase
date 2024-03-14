const config = require('config');
const rabbitmq_config = config.get('rabbitmq')
const amqplib = require('amqplib');

export class RabbitmqSource {
    public channel: any
    public connectionString: string
    constructor(connectionString : string){
        this.connectionString = connectionString
    }
    async initialize(){
        const conn =  await amqplib.connect(this.connectionString);
        this.channel = await conn.createChannel()
        return this
    }
}

export const RabbitmqInstance = new RabbitmqSource(rabbitmq_config.connectionString)
