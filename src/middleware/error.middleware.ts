import BaseError from "@/utils/error/base.error";
import { StatusCodes } from "http-status-codes";
import { CannotCreateEntityIdMapError, EntityNotFoundError, QueryFailedError } from "typeorm";

export const errorHanlder = ((error: any, req: any, res: any, next: any) => {
    console.log('Error::: ' + error);
    
    let message = (error as any).message.message;
    let code = 'HttpException';
    let status = StatusCodes.INTERNAL_SERVER_ERROR;
    switch (error.constructor) {
        case BaseError:
            error.statusCode = error.statusCode || 500;
            error.status = error.status || 'error';
            res.status(error.statusCode).json({
                statusCode: error.statusCode,
                status: error.status,
                message: error.message,
            });
            break;
        case QueryFailedError:
            status = StatusCodes.UNPROCESSABLE_ENTITY
            message = (error as any).message;
            if (error.hasOwnProperty('detail') && (error as any).detail !== undefined){
                message += '- detail: ' + (error as any).detail;
            }            
            code = (error as any).code;
            break;
        case EntityNotFoundError:
            status = StatusCodes.UNPROCESSABLE_ENTITY
            message = (error as EntityNotFoundError).message;
            code = (error as any).code;
            break;
        case CannotCreateEntityIdMapError: 
            status = StatusCodes.UNPROCESSABLE_ENTITY
            message = (error as CannotCreateEntityIdMapError).message;
            code = (error as any).code;
            break;
        default:
            break;
    }
    res.status(status).json({status, message, code });
});