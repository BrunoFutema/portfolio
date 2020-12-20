import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpotsService from '@apps/AirCNC/modules/spots/services/ListSpotsService';

export default class DashboardController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.query;

    const listSpotsService = container.resolve(ListSpotsService);

    const spots = await listSpotsService.execute({
      user_id: user_id as string,
    });

    return response.json(spots);
  }
}
