import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";


@EntityRepository(Compliment)
class CompliemntsRepositorires extends Repository <Compliment>{

}



export { CompliemntsRepositorires }
