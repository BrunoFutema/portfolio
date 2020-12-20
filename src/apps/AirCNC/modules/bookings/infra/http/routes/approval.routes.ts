import { Router } from 'express';

import ApprovalController from '../controllers/ApprovalController';
import RejectionController from '../controllers/RejectionController';

const approvalBookingRouter = Router();

const approvalBookingController = new ApprovalController();
const rejectionBookingController = new RejectionController();

approvalBookingRouter.post(
  '/:booking_id/approvals',
  approvalBookingController.create,
);

approvalBookingRouter.post(
  '/:booking_id/rejections',
  rejectionBookingController.create,
);

export default approvalBookingRouter;
