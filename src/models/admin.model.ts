import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id! : string 

    @Column("varchar", {length: 30, unique: true})
    email! : string

    @Column("varchar", {length: 100})
    password!: string

    @Column("varchar", {length: 30})
    fullname! : string

    @Column("varchar", {length: 150})
    address! : string
    
    @Column("varchar", {length: 15, unique: true})
    phone_number! : string

    @Column("date")
    birthday! : Date

    @Column("boolean", {default: false})
    isBlock!: boolean

    @CreateDateColumn()
    create_at! : Date

    @UpdateDateColumn()
    update_at! : Date
}           