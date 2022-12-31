import { Response, Request, NextFunction } from 'express';
import AppError from '../AppError/AppError';

const ErrorHandler = (err: Error, request: Request, response: Response, _: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      success: false,
      status: 'error',
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
  }

  return response.status(500).json({
    success: false,
    name: err.name,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  })
}

export default ErrorHandler;