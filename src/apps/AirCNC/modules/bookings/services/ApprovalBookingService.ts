import { injectable, inject } from 'tsyringe';

import IBookingsRepository from '@apps/AirCNC/modules/bookings/repositories/IBookingsRepository';

import Booking from '../infra/typeorm/entities/Booking';

interface IRequest {
  booking_id: string;
}

@injectable()
class ApprovalBookingService {
  constructor(
    @inject('AirCNC_BookingsRepository')
    private bookingsRepository: IBookingsRepository,
  ) {}

  public async execute({ booking_id }: IRequest): Promise<Booking> {
    const booking = await this.bookingsRepository.findById(booking_id);

    booking.approved = true;

    await this.bookingsRepository.save(booking);

    return booking;
  }
}

export default ApprovalBookingService;
