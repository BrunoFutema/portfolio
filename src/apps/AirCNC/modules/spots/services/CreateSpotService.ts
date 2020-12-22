import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import ISpotsRepository from '@apps/AirCNC/modules/spots/repositories/ISpotsRepository';

import Spot from '../infra/typeorm/entities/Spot';
import ICreateTechDTO from '../dtos/ICreateTechDTO';

interface IRequest {
  thumbnail: string;
  company: string;
  price: number;
  techs: string;
  user_id: string;
}

@injectable()
class CreateSpotService {
  constructor(
    @inject('AirCNC_SpotsRepository')
    private spotsRepository: ISpotsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    thumbnail,
    company,
    price,
    techs,
    user_id,
  }: IRequest): Promise<Spot> {
    const parsedTechs: ICreateTechDTO[] = techs
      .split(',')
      .map((tech: string) => ({ name: tech.trim() }));

    const spot = await this.spotsRepository.create({
      thumbnail,
      company,
      price,
      techs: parsedTechs,
      user_id,
    });

    await this.storageProvider.saveFile(thumbnail);

    return spot;
  }
}

export default CreateSpotService;
