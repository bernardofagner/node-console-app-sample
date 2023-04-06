import { AcessorioEquipamentoEntity } from "./AcessorioEquipamentoEntity";

export class MascaraEntity {
    Protecao: number = 0;
    DanoDeArma: number = 0;
    ChanceCritico: number = 0;
    DanoCritico: number = 0;
    AceleraçãoHabilidade: number = 0;
    Danohabilidade: number = 0;
    AcessorioEquipamento?: AcessorioEquipamentoEntity;

    constructor(init?: Partial<MascaraEntity>) {
        Object.assign(this, init);
    }
}