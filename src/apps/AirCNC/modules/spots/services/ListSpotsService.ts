import { injectable, inject } from 'tsyringe';

import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';

import Spot from '@apps/AirCNC/modules/spots/infra/typeorm/entities/Spot';

interface IRequest {
  techs: string[];
}

@injectable()
class ListSpotsService {
  constructor(
    @inject('AirCNC_SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute({ techs }: IRequest): Promise<Spot[]> {
    const spots = this.spotsRepository.findByTechsNames(techs);

    return spots;
  }
}

export default ListSpotsService;
