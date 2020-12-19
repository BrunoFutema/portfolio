import { Router } from 'express';

import sessionsRouter from '@apps/AirCNC/modules/users/infra/http/routes/sessions.routes';

const airCncRouter = Router();

airCncRouter.use('/sessions', sessionsRouter);

export default airCncRouter;
