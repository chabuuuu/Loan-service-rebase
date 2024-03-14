import { loanPackageController } from '@/container/loan-package.container'
import { CreateLoanPackageDto } from '@/dto/loan-package/create-loan-package.dto'
import { UpdateLoanPackageDto } from '@/dto/loan-package/update-loan-package.dto'
import { classValidate } from '@/middleware/class-validate.middleware'
import express from 'express'

const loanPackageRouter = express.Router()

loanPackageRouter
.post('/', classValidate(CreateLoanPackageDto), loanPackageController.create.bind(loanPackageController))
.put('/:id', classValidate(UpdateLoanPackageDto), loanPackageController.update.bind(loanPackageController))
.delete('/:id', loanPackageController.delete.bind(loanPackageController))
.get('/:id', loanPackageController.findOne.bind(loanPackageController))
.get('/', loanPackageController.findAll.bind(loanPackageController))

export default loanPackageRouter