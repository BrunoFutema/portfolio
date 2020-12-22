import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpotsService from '@apps/AirCNC/modules/spots/services/ListSpotsService';

export default class DashboardController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id: user } = request.query;
    const { user_id } = request.headers;

    const listSpotsService = container.resolve(ListSpotsService);

    const spots = await listSpotsService.execute({
      user_id: user_id ? (user_id as string) : (user as string),
    });

    return response.json(spots);
  }
}
