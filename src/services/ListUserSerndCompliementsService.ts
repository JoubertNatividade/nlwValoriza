import { getCustomRepository } from "typeorm"
import { CompliemntsRepositorires } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(CompliemntsRepositorires);

    const compliment =  await complimentRepository.find({
      where:{
        user_send: user_id
      }
    });

    return compliment;
  }

}

export { ListUserSendComplimentsService }
