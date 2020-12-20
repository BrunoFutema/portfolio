import Spot from '../infra/typeorm/entities/Spot';

import ICreateSpotDTO from '../dtos/ICreateSpotDTO';

export default interface ISpotsRepository {
  create(data: ICreateSpotDTO): Promise<Spot>;
  save(spot: Spot): Promise<Spot>;
}
