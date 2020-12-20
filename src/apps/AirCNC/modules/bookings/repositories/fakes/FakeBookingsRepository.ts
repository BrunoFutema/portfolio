import { uuid } from 'uuidv4';

import ICreateBookingDTO from '../../dtos/ICreateBookingDTO';
import IBookingsRepository from '../IBookingsRepository';

import Booking from '../../infra/typeorm/entities/Booking';

class FakeBookingsRepository implements IBookingsRepository {
  private bookings: Booking[] = [];

  public async create(data: ICreateBookingDTO): Promise<Booking> {
    const booking = new Booking();

    Object.assign(booking, { id: uuid() }, data);

    this.bookings.push(booking);

    return booking;
  }

  public async findById(id: string): Promise<Booking | undefined> {
    const findBooking = this.bookings.find(booking => booking.id === id);

    return findBooking;
  }

  public async save(booking: Booking): Promise<Booking> {
    const findIndex = this.bookings.findIndex(
      findBooking => findBooking.id === booking.id,
    );

    this.bookings[findIndex] = booking;

    return booking;
  }
}

export default FakeBookingsRepository;
