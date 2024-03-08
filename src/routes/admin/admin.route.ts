import adminController from '@/container/admin.container';
import { CreateAdminDto } from '@/dto/account/create-admin.dto';
import { classValidate } from '@/middleware/class-validate.middleware';
import express from 'express';
const adminRouter = express.Router();
adminRouter
.post('/create', classValidate(CreateAdminDto), adminController.create.bind(adminController))
.get('/', adminController.findAll.bind(adminController))

export default adminRouter