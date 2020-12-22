import FakeStorageProvider from '../../../../../shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../../users/repositories/fakes/FakeUsersRepository';
import FakeSpotsRepository from '../repositories/fakes/FakeSpotsRepository';
import CreateSpotService from './CreateSpotService';

let fakeUsersRepository: FakeUsersRepository;
let fakeSpotsRepository: FakeSpotsRepository;
let fakeStorageProvider: FakeStorageProvider;
let createSpotService: CreateSpotService;

describe('AirCNC_CreateSpots', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeSpotsRepository = new FakeSpotsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    createSpotService = new CreateSpotService(
      fakeSpotsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to create a new AirCNC spot', async () => {
    const user = await fakeUsersRepository.create({
      email: 'johndoe@example.com',
    });

    const spot = await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Node.js, React JS, React Native',
      user_id: user.id,
    });

    expect(spot).toHaveProperty('id');
  });
});
