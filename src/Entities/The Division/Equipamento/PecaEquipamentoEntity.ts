import { TipoPecaEquipamento } from "../../../Enums/TheDivision/TipoPecaEquipamento";
import { AcessorioEquipamentoEntity } from "./AcessorioEquipamentoEntity";

export class PecaEquipamentoEntity {

    Tipo: TipoPecaEquipamento
    Protecao: number = 0;
    DanoDeArma: number = 0;
    ChanceCritico: number = 0;
    DanoCritico: number = 0;
    AceleraçãoHabilidade: number = 0;
    Danohabilidade: number = 0;
    AcessorioEquipamento?: AcessorioEquipamentoEntity;

    constructor(init?: Partial<PecaEquipamentoEntity>) {
        Object.assign(this, init);
    }
}