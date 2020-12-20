import { getRepository, Repository } from 'typeorm';

import ICreateBookingDTO from '@apps/AirCNC/modules/bookings/dtos/ICreateBookingDTO';
import IBookingsRepository from '@apps/AirCNC/modules/bookings/repositories/IBookingsRepository';

import Booking from '../entities/Booking';

class BookingsRepository implements IBookingsRepository {
  private ormRepository: Repository<Booking>;

  constructor() {
    this.ormRepository = getRepository(Booking);
  }

  public async create(data: ICreateBookingDTO): Promise<Booking> {
    const booking = this.ormRepository.create(data);

    await this.ormRepository.save(booking);

    return booking;
  }

  public async save(booking: Booking): Promise<Booking> {
    await this.ormRepository.save(booking);

    return booking;
  }
}

export default BookingsRepository;
