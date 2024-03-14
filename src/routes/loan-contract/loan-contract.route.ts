import { loanContractController } from '@/container/loan-contract.container'
import express from 'express'

const loanContractRouter = express.Router()

loanContractRouter
.post('/', loanContractController.create.bind(loanContractController))
.put('/:id', loanContractController.update.bind(loanContractController))
.delete('/:id', loanContractController.delete.bind(loanContractController))
.get('/:id', loanContractController.findOne.bind(loanContractController))
.get('/', loanContractController.findAll.bind(loanContractController))

export default loanContractRouter