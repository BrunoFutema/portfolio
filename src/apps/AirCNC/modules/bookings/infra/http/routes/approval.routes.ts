import { Router } from 'express';

import ApprovalController from '../controllers/ApprovalController';

const approvalBookingRouter = Router();

const approvalBookingController = new ApprovalController();

approvalBookingRouter.post(
  '/:booking_id/approvals',
  approvalBookingController.create,
);

export default approvalBookingRouter;
