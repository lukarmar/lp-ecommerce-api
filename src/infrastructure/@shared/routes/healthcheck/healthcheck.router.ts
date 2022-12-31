import { Router } from 'express';
import Healthcheck from './healthcheck';


const healthcheckRouter = Router();
const healthcheck = new Healthcheck();



healthcheckRouter.get('/', healthcheck.getHealthcheck);

export default healthcheckRouter;