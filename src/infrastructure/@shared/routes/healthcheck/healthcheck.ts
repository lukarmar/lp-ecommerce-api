import { Request, Response } from 'express';
import healthcheckDTO from  '../../../../domain/@shared/DTOs/healthcheckDTO'


export default class Healthcheck {
  async getHealthcheck(request:Request, response:Response):Promise<Response> {
    
    const healthcheck: healthcheckDTO = {
      uptime : process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
      processtime: process.hrtime()
    }


    try {

      return response.status(200).json(healthcheck);

    } catch (err) {

      healthcheck.message = err.message;

      return response.status(503).json({
        message: err.message || 'Unexpected error.',
      });

    }

  }
}