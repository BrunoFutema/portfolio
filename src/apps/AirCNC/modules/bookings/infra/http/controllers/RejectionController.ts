import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RejectionBookingService from '@apps/AirCNC/modules/bookings/services/RejectionBookingService';

export default class RejectionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { booking_id } = request.params;

    const rejectionBookingService = container.resolve(RejectionBookingService);

    const booking = await rejectionBookingService.execute({
      booking_id,
    });

    const bookingUserSocket = request.connectedUsers[booking.user_id];

    if (bookingUserSocket) {
      request.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return response.json(booking);
  }
}
