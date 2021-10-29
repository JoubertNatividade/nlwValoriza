import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";



class ListTagService {
  async execute(){
    const tagsRepository = getCustomRepository(TagsRepositories)

    const tags = await tagsRepository.find()

    return tags;
  }
}

export { ListTagService };
