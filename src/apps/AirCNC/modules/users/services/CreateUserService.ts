import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@apps/AirCNC/modules/users/repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('AirCNC_UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<User> {
    let user = await this.usersRepository.findByEmail(email);

    if (!user) {
      user = await this.usersRepository.create({ email });
    }

    return user;
  }
}

export default CreateUserService;
