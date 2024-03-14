import { authenticationController } from '@/container/authentication.container'
import express from 'express'

const authenticationRouter = express.Router()

authenticationRouter
    .get('/me', authenticationController.getAccount.bind(authenticationController))

export default authenticationRouter