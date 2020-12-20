import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ApprovalBookingService from '@apps/AirCNC/modules/bookings/services/ApprovalBookingService';

export default class ApprovalController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { booking_id } = request.params;

    const approvalBookingService = container.resolve(ApprovalBookingService);

    const booking = await approvalBookingService.execute({
      booking_id,
    });

    const bookingUserSocket = request.connectedUsers[booking.user_id];

    if (bookingUserSocket) {
      request.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return response.json(booking);
  }
}
