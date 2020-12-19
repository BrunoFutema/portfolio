import { Router } from 'express';

import airCncRouter from './airCnc.routes';

const routes = Router();

routes.use('/air-cnc', airCncRouter);

export default routes;
