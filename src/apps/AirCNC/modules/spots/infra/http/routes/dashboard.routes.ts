import { Router } from 'express';

import DashboardController from '../controllers/DashboardController';

const dashboardRouter = Router();

const dashboardController = new DashboardController();

dashboardRouter.get('/', dashboardController.show);

export default dashboardRouter;
