import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBookingService from '@apps/AirCNC/modules/bookings/services/CreateBookingService';

export default class BookingsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { spot_id } = request.params;
    const { date } = request.body;
    const { user_id } = request.headers;

    const createBookingService = container.resolve(CreateBookingService);

    const booking = await createBookingService.execute({
      date,
      spot_id,
      user_id: user_id as string,
    });

    return response.json(booking);
  }
}
