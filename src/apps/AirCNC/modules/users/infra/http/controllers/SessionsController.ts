import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@apps/AirCNC/modules/users/services/CreateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ email });

    return response.json(user);
  }
}
