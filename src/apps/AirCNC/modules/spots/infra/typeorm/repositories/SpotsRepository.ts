import { getRepository, Repository } from 'typeorm';

import ICreateSpotDTO from '@apps/AirCNC/modules/spots/dtos/ICreateSpotDTO';
import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';

import Spot from '../entities/Spot';

class SpotsRepository implements ISpotsRepository {
  private ormRepository: Repository<Spot>;

  constructor() {
    this.ormRepository = getRepository(Spot);
  }

  public async create(data: ICreateSpotDTO): Promise<Spot> {
    const spot = this.ormRepository.create(data);

    await this.ormRepository.save(spot);

    return spot;
  }

  public async save(spot: Spot): Promise<Spot> {
    await this.ormRepository.save(spot);

    return spot;
  }
}

export default SpotsRepository;
