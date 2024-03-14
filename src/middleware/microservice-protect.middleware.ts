import { authenticationService } from "@/container/authentication.container";
import BaseError from "@/utils/error/base.error";
import { StatusCodes } from "http-status-codes";

const jwt = require('jsonwebtoken');

export async function microserviceProtect(req: any, res: any, next: any) {
    try {
        if (!req.header('Authorization')) {
            throw new BaseError(StatusCodes.UNAUTHORIZED, 'fail', 'No JWT');
        }
        const token = req.header('Authorization').split(' ')[1];

        console.log('token:::',token);
        if (!token) {
            throw new BaseError(401, 'fail', 'No JWT');
            // return res.status(401).json({ message: 'Không có JWT' });
        }
        // let userId
        await jwt.verify(token, process.env.JWT_SECRET, async (err: any, payload: any) => {            
            if (err) {
                console.log(err);

                throw new BaseError(403, 'failed', err.message);
                // return res.status(403).json({ message: 'JWT không hợp lệ' });
            }
            if (payload.type === 'auth'){      
                const userOnDb = await authenticationService.getAccount(payload.accountId, payload.role)
                // const userOnDb = await prisma.account.findFirst({
                //     where: {
                //         id: payload.accountId
                //     }
                // })
                if (!userOnDb) {
                    throw new BaseError(401, 'fail', 'Invalid JWT');
    
                }
                if (userOnDb?.isBlock) {
                    throw new BaseError(401, 'fail', 'This account is currently blocked');
                }
            }
            req.user = payload;            
            next();
        });
    } catch (error) {
        next(error)
    }
}