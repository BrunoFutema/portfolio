import FakeStorageProvider from '../../../../../shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../../users/repositories/fakes/FakeUsersRepository';
import FakeSpotsRepository from '../../spots/repositories/fakes/FakeSpotsRepository';
import FakeBookingsRepository from '../repositories/fakes/FakeBookingsRepository';
import CreateSpotService from '../../spots/services/CreateSpotService';
import CreateBookingService from './CreateBookingService';

let fakeUsersRepository: FakeUsersRepository;
let fakeSpotsRepository: FakeSpotsRepository;
let fakeBookingsRepository: FakeBookingsRepository;
let fakeStorageProvider: FakeStorageProvider;
let createSpotService: CreateSpotService;
let createBookingService: CreateBookingService;

describe('AirCNC_CreateBookings', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeSpotsRepository = new FakeSpotsRepository();
    fakeBookingsRepository = new FakeBookingsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    createSpotService = new CreateSpotService(
      fakeSpotsRepository,
      fakeStorageProvider,
    );
    createBookingService = new CreateBookingService(fakeBookingsRepository);
  });

  it('should be able to create a new AirCNC booking', async () => {
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

    const booking = await createBookingService.execute({
      date: new Date(),
      spot_id: spot.id,
      user_id: user.id,
    });

    expect(booking).toHaveProperty('id');
  });
});
