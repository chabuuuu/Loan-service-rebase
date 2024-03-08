import { Admin } from '@/models/admin.model'
import { Employee } from '@/models/employee.model'
import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "test",
    entities: [Admin, Employee],
    synchronize: true,
    logging: false,
    migrations: [__dirname + "/migrations/*.js"],
})