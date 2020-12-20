import Booking from '../infra/typeorm/entities/Booking';

import ICreateBookingDTO from '../dtos/ICreateBookingDTO';

export default interface IBookingsRepository {
  create(data: ICreateBookingDTO): Promise<Booking>;
  findById(id: string): Promise<Booking | undefined>;
  save(data: Booking): Promise<Booking>;
}
