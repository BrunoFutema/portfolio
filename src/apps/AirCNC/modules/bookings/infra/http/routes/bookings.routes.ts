import { Router } from 'express';

import BookingsController from '../controllers/BookingsController';

const bookingsRouter = Router();

const bookingsController = new BookingsController();

bookingsRouter.post('/', bookingsController.create);

export default bookingsRouter;
