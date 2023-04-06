import { EquipamentoEntity } from "../Equipamento/EquipamentoEntity";

export class PersonagemEntity {
    public Equipamento?: EquipamentoEntity;

    constructor(init?: Partial<PersonagemEntity>) {
        Object.assign(this, init);
    }
}