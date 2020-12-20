import FakeUsersRepository from '../../users/repositories/fakes/FakeUsersRepository';
import FakeSpotsRepository from '../repositories/fakes/FakeSpotsRepository';
import CreateSpotService from './CreateSpotService';
import ListSpotsRepository from './ListSpotsService';

let fakeUsersRepository: FakeUsersRepository;
let fakeSpotsRepository: FakeSpotsRepository;
let createSpotService: CreateSpotService;
let listSpotsRepository: ListSpotsRepository;

describe('AirCNC_ListSpotsByTechs', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeSpotsRepository = new FakeSpotsRepository();

    createSpotService = new CreateSpotService(fakeSpotsRepository);
    listSpotsRepository = new ListSpotsRepository(fakeSpotsRepository);
  });

  it('should be able to list spots by techs', async () => {
    const user = await fakeUsersRepository.create({
      email: 'johndoe@example.com',
    });

    const spot1 = await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Node.js, React JS, React Native',
      user_id: user.id,
    });

    const spot2 = await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Node.js, TypeORM',
      user_id: user.id,
    });

    await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Next.js',
      user_id: user.id,
    });

    const spots = await listSpotsRepository.execute({
      techs: ['Node.js'],
    });

    expect(spots).toEqual([spot1, spot2]);
  });

  it('should be able to list spots by user_id', async () => {
    const user1 = await fakeUsersRepository.create({
      email: 'johndoe@example.com',
    });

    const user2 = await fakeUsersRepository.create({
      email: 'johndoe@example.com',
    });

    const spot1 = await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Node.js, React JS, React Native',
      user_id: user1.id,
    });

    const spot2 = await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Node.js, TypeORM',
      user_id: user1.id,
    });

    await createSpotService.execute({
      thumbnail: 'thumbnail.png',
      company: 'Rocketseat',
      price: 80,
      techs: 'Next.js',
      user_id: user2.id,
    });

    const spots = await listSpotsRepository.execute({
      user_id: user1.id,
    });

    expect(spots).toEqual([spot1, spot2]);
  });
});
