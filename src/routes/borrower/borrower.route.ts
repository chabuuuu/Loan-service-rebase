import { borrowerController } from '@/container/borrower.container';
import { CreateBorrowerDto } from '@/dto/borrower/create-borrower.dto';
import { UpdateBorrowerDto } from '@/dto/borrower/update-borrower.dto';
import { classValidate } from '@/middleware/class-validate.middleware';
import express from 'express';
const borrowerRouter = express.Router()

borrowerRouter
    .post('/', classValidate(CreateBorrowerDto), borrowerController.create.bind(borrowerController))
    .put('/:id', classValidate(UpdateBorrowerDto), borrowerController.update.bind(borrowerController))
    .delete('/:id', borrowerController.delete.bind(borrowerController))
    .get('/:id', borrowerController.findOne.bind(borrowerController))
    .get('/', borrowerController.findAll.bind(borrowerController))

export default borrowerRouter