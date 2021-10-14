class ContractEntity {
    
    ContractId: string;

    constructor(init?: Partial<ContractEntity>) {
        Object.assign(this, init);
    }
}

export { ContractEntity };