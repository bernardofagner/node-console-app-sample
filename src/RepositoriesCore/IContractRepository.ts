import { ContractEntity } from "../Entities/ClassBased/ContractEntity";

export default interface IContractRepository {

    /**
     * @description Responsável por salvar dados de um contrato no banco de dados.
     * @param contract Representa uma entidade contendo todos os dados a serem salvos no banco de dados.
     * @returns Retorna o id da nova linha inserida no banco de dados ou uma exceção de banco de dados caso a operação falhe.
     */
    InsertContract(contract: ContractEntity): string;
}