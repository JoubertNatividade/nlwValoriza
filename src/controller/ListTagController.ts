import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class LitTagContoller {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagService()

    const tag = await listTagService.execute()

    return response.json(tag);
  }

}

export { LitTagContoller };
