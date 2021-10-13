import TUserApplication from "../ApplicationCore/TUserApplication";
import { ContractEntity } from "../Entities/ClassBased/ContractEntity";
import TAccreditedUser from "../Entities/ClassBased/User";
import IContractRepository from "../RepositoriesCore/IContractRepository";

/**Aplicação da primeira e segunda lei Solid - Open-Close Principle. Neste exemplo, não importa o tipo de usuário, a credencial correta sempre será exibida.
 * 
 * Existem outras abordagens, mas essa é a mais suscinta.*/
class UserApplication implements TUserApplication {

    private readonly contractRepository: IContractRepository;

    constructor(contractRepository: IContractRepository) {
        this.contractRepository = contractRepository;
    }

    public Execute(user: TAccreditedUser): void {
        console.log(user.ShowCredential());
        this.contractRepository.InsertContract(new ContractEntity({
            ContractId: "New contractId"
        }));
    }
}

export { UserApplication };