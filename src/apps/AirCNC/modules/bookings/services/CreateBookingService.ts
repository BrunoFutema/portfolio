import { injectable, inject } from 'tsyringe';

import IBookingsRepository from '@apps/AirCNC/modules/bookings/repositories/IBookingsRepository';

import Booking from '../infra/typeorm/entities/Booking';

interface IRequest {
  date: Date;
  spot_id: string;
  user_id: string;
}

@injectable()
class CreateBookingService {
  constructor(
    @inject('AirCNC_BookingsRepository')
    private bookingsRepository: IBookingsRepository,
  ) {}

  public async execute({ date, spot_id, user_id }: IRequest): Promise<Booking> {
    const booking = await this.bookingsRepository.create({
      date,
      spot_id,
      user_id,
    });

    const findBooking = await this.bookingsRepository.findById(booking.id);

    return findBooking;
  }
}

export default CreateBookingService;
