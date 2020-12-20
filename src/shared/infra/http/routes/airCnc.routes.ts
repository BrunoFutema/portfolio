import { Router } from 'express';

import sessionsRouter from '@apps/AirCNC/modules/users/infra/http/routes/sessions.routes';
import spotsRouter from '@apps/AirCNC/modules/spots/infra/http/routes/spots.routes';
import dashboardRouter from '@apps/AirCNC/modules/spots/infra/http/routes/dashboard.routes';

const airCncRouter = Router();

airCncRouter.use('/sessions', sessionsRouter);
airCncRouter.use('/spots', spotsRouter);
airCncRouter.use('/dashboard', dashboardRouter);

export default airCncRouter;
