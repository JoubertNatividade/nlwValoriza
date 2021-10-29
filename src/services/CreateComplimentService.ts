import { getCustomRepository } from "typeorm";
import { CompliemntsRepositorires } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_send: string;
  user_receiver: string;
  tag_id: string;
  message: string
}

class CreateComplimentService {
  async execute({user_send, user_receiver, tag_id, message}:IComplimentRequest){

    const complimentRepository =getCustomRepository(CompliemntsRepositorires);
    const userRepository = getCustomRepository(UsersRepositories);

    if ( user_send === user_receiver ) {
      throw new Error('Not allowed to send self compliments!')
    }


    const userReceiverExists = await userRepository.findOne(user_receiver);

    if(!userReceiverExists) {
      throw new Error('User Receiver not exists!')
    }

    const compliment = complimentRepository.create({
      user_send,
      user_receiver,
      tag_id,
      message
    })

    await complimentRepository.save(compliment);

    return compliment;
  }
}


export { CreateComplimentService }
