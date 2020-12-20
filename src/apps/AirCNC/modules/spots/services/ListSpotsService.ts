import { injectable, inject } from 'tsyringe';

import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';

import Spot from '@apps/AirCNC/modules/spots/infra/typeorm/entities/Spot';

interface IRequest {
  user_id?: string;
  techs?: string[];
}

@injectable()
class ListSpotsService {
  constructor(
    @inject('AirCNC_SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute({ user_id, techs }: IRequest): Promise<Spot[]> {
    let spots: Promise<Spot[]>;

    if (!user_id && techs) {
      spots = this.spotsRepository.findByTechsNames(techs);
    }

    if (user_id && !techs) {
      spots = this.spotsRepository.findByUserId(user_id);
    }

    return spots;
  }
}

export default ListSpotsService;
