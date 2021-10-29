import { getCustomRepository } from "typeorm"
import { CompliemntsRepositorires } from "../repositories/ComplimentsRepositories";

class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(CompliemntsRepositorires);

    const compliment =  await complimentRepository.find({
      where:{
        user_receiver: user_id
      }
    });

    return compliment;
  }

}

export { ListUserReceiverComplimentsService }
