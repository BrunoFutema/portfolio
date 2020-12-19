import { container } from 'tsyringe';

import IUsersRepository from '@apps/AirCNC/modules/users/repositories/IUsersRepository';
import UsersRepository from '@apps/AirCNC/modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'AirCNC_UsersRepository',
  UsersRepository,
);
