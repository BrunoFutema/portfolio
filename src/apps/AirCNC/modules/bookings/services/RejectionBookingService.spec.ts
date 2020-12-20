import FakeUsersRepository from '../../users/repositories/fakes/FakeUsersRepository';
import FakeSpotsRepository from '../../spots/repositories/fakes/FakeSpotsRepository';
import FakeBookingsRepository from '../repositories/fakes/FakeBookingsRepository';
import CreateSpotService from '../../spots/services/CreateSpotService';
import CreateBookingService from './CreateBookingService';
import RejectionBookingService from './RejectionBookingService';

let fakeUsersRepository: FakeUsersRepository;
let fakeSpotsRepository: FakeSpotsRepository;
let fakeBookingsRepository: FakeBookingsRepository;
let createSpotService: CreateSpotService;
let createBookingService: CreateBookingService;
let rejectionBookingService: RejectionBookingService;

describe('AirCNC_ApprovalBooking', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeSpotsRepository = new FakeSpotsRepository();
    fakeBookingsRepository = new FakeBookingsRepository();

    createSpotService = new CreateSpotService(fakeSpotsRepository);
    createBookingService = new CreateBookingService(fakeBookingsRepository);
    rejectionBookingService = new RejectionBookingService(
      fakeBookingsRepository,
    );
  });

  it('should be able to approve a AirCNC booking', async () => {
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

    const rejectedBooking = await rejectionBookingService.execute({
      booking_id: booking.id,
    });

    expect(rejectedBooking.approved).toBeFalsy();
  });
});
