import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/airCncUpload';

import SpotsController from '../controllers/SpotsController';

const spotsRouter = Router();
const upload = multer(uploadConfig);

const spotsController = new SpotsController();

spotsRouter.post('/', upload.single('thumbnail'), spotsController.create);

export default spotsRouter;
