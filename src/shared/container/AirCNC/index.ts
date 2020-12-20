import { container } from 'tsyringe';

import IUsersRepository from '@apps/AirCNC/modules/users/repositories/IUsersRepository';
import UsersRepository from '@apps/AirCNC/modules/users/infra/typeorm/repositories/UsersRepository';

import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';
import SpotsRepository from '@apps/AirCNC/modules/spots/infra/typeorm/repositories/SpotsRepository';

container.registerSingleton<IUsersRepository>(
  'AirCNC_UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISpotsRepository>(
  'AirCNC_SpotsRepository',
  SpotsRepository,
);
