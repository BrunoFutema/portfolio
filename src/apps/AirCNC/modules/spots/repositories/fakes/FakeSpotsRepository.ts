import { uuid } from 'uuidv4';

import ICreateSpotDTO from '../../dtos/ICreateSpotDTO';
import ISpotsRepository from '../ISpotsRepository';

import Spot from '../../infra/typeorm/entities/Spot';

class FakeSpotsRepository implements ISpotsRepository {
  private spots: Spot[] = [];

  public async create(data: ICreateSpotDTO): Promise<Spot> {
    const spot = new Spot();

    Object.assign(spot, { id: uuid() }, data);

    this.spots.push(spot);

    return spot;
  }

  public async findByTechsNames(techs: string[]): Promise<Spot[]> {
    const findSpots = this.spots.filter(
      spot => spot.techs.filter(tech => techs.includes(tech.name)).length > 0,
    );

    return findSpots;
  }

  public async save(spot: Spot): Promise<Spot> {
    const findIndex = this.spots.findIndex(findSpot => findSpot.id === spot.id);

    this.spots[findIndex] = spot;

    return spot;
  }
}

export default FakeSpotsRepository;
