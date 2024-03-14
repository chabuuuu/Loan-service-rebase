import { lenderController } from '@/container/lender.container'
import { CreateLenderDto } from '@/dto/lender/create-lender.dto'
import { UpdateLenderDto } from '@/dto/lender/update-lender.dto'
import { classValidate } from '@/middleware/class-validate.middleware'
import express from 'express'

const lenderRouter = express.Router()

lenderRouter
    .post('/', classValidate(CreateLenderDto), lenderController.create.bind(lenderController))
    .put('/:id', classValidate(UpdateLenderDto), lenderController.update.bind(lenderController))
    .delete('/:id', lenderController.delete.bind(lenderController))
    .get('/:id', lenderController.findOne.bind(lenderController))
    .get('/', lenderController.findAll.bind(lenderController))

export default lenderRouter 