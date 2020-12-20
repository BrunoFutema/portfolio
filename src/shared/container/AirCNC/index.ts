import { container } from 'tsyringe';

import IUsersRepository from '@apps/AirCNC/modules/users/repositories/IUsersRepository';
import UsersRepository from '@apps/AirCNC/modules/users/infra/typeorm/repositories/UsersRepository';

import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';
import SpotsRepository from '@apps/AirCNC/modules/spots/infra/typeorm/repositories/SpotsRepository';

import IBookingsRepository from '@apps/AirCNC/modules/bookings/repositories/IBookingsRepository';
import BookingsRepository from '@apps/AirCNC/modules/bookings/infra/typeorm/repositories/BookingsRepository';

container.registerSingleton<IUsersRepository>(
  'AirCNC_UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISpotsRepository>(
  'AirCNC_SpotsRepository',
  SpotsRepository,
);

container.registerSingleton<IBookingsRepository>(
  'AirCNC_BookingsRepository',
  BookingsRepository,
);
