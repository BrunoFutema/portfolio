import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSpotService from '@apps/AirCNC/modules/spots/services/CreateSpotService';

export default class SpotsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;
    const { company, techs, price } = request.body;
    const { user_id } = request.headers;

    const createUserService = container.resolve(CreateSpotService);

    const spot = await createUserService.execute({
      thumbnail: filename,
      company,
      price,
      techs,
      user_id: user_id as string,
    });

    return response.json(spot);
  }
}
