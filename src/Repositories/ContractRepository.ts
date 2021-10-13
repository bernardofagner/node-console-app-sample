import IContractRepository from "../RepositoriesCore/IContractRepository";
import { ContractEntity } from "../Entities/ClassBased/ContractEntity";
import { BaseRepository } from "./Base/BaseRepository";

class ContractRepository extends BaseRepository implements IContractRepository {

    constructor(connectionString: string) {
        super(connectionString);
    }

    public InsertContract(contract: ContractEntity): string {
        const sqlQuery = `
            INSERT INTO contract
            (
                contractId
            )
            VALUES
            (
                @contractId
            )`;

        const params = {
            conractId: contract.ContractId
        };

        return super.Insert(sqlQuery, params);
    }
}

export { ContractRepository };