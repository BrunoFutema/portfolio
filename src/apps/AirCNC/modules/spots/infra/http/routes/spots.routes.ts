import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/airCncUpload';

import SpotsController from '../controllers/SpotsController';
import BookingsController from '../../../../bookings/infra/http/controllers/BookingsController';

const spotsRouter = Router();
const upload = multer(uploadConfig);

const spotsController = new SpotsController();
const bookingsController = new BookingsController();

spotsRouter.get('/', spotsController.index);
spotsRouter.post('/', upload.single('thumbnail'), spotsController.create);

spotsRouter.post('/:spot_id/bookings', bookingsController.create);

export default spotsRouter;
