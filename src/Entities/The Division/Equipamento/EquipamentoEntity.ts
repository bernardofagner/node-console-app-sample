import { PecaEquipamentoEntity } from "./PecaEquipamentoEntity";

export class EquipamentoEntity {
    public Mascara?: PecaEquipamentoEntity;
    public Mochila?: PecaEquipamentoEntity;
    public Colete?: PecaEquipamentoEntity;
    public Luva?: PecaEquipamentoEntity;
    public Coldre?: PecaEquipamentoEntity;
    public Joelheira?: PecaEquipamentoEntity;

    constructor(init?: Partial<EquipamentoEntity>) {
        Object.assign(this, init);
    }
}