import { adminController } from '@/container/admin.container';
import { CreateAdminDto } from '@/dto/account/create-admin.dto';
import { UpdateAdminDto } from '@/dto/account/update-admin.dto';
import { classValidate } from '@/middleware/class-validate.middleware';
import express from 'express';
const adminRouter = express.Router();
adminRouter
    .post('/', classValidate(CreateAdminDto), adminController.create.bind(adminController))
    .put('/:id', classValidate(UpdateAdminDto), adminController.update.bind(adminController))
    .delete('/:id', adminController.delete.bind(adminController))
    .get('/block-status/:id', adminController.getBlockedStatus.bind(adminController))
    .get('/', adminController.findAll.bind(adminController))
export default adminRouter