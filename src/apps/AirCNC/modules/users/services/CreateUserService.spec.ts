import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService;

describe('AirCNC_CreateUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    createUserService = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new AirCNC user', async () => {
    const user = await createUserService.execute({
      email: 'johndoe@example.com',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be able to find a AirCNC user already exists', async () => {
    const user = await createUserService.execute({
      email: 'johndoe@example.com',
    });

    const findUser = await createUserService.execute({
      email: user.email,
    });

    expect(findUser).toHaveProperty('id');
  });
});
