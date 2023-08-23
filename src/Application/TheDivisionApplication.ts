import { TDivisioApplication } from "../ApplicationCore/TTheDivisioApplication";
import { EquipamentoEntity } from "../Entities/The Division/Equipamento/EquipamentoEntity";
import { PersonagemEntity } from "../Entities/The Division/Personagem/PersonagemEntity";
import { PecaEquipamentoEntity } from "../Entities/The Division/Equipamento/PecaEquipamentoEntity";
import { TipoPecaEquipamento } from "../Enums/TheDivision/TipoPecaEquipamento";

export class TheDivisionApplication implements TDivisioApplication {
    
    public Execute(): void {
        console.log("=> Executando TheDivisionApplication...\n");
        const equipamento = this.inicializarEquipamento();
        const personagem = this.inicializarPersonagem(equipamento);
        console.log(JSON.stringify(personagem));
        console.log("=> Executou TheDivisionApplication...\n");
    }

    //#region Personagem    
    private inicializarPersonagem(equipamento: EquipamentoEntity): PersonagemEntity {
        return new PersonagemEntity({
            Equipamento: equipamento
        });
    }
    //#endregion

    //#region Equipamento completo
    private inicializarEquipamento(): EquipamentoEntity {
        return new EquipamentoEntity({
            Coldre: this.inicializarColdre(),
            Colete: this.inicializarColete(),
            Joelheira: this.inicializarJoelhiera(),
            Luva: this.inicializarLuva(),
            Mascara: this.inicializarMascara(),
            Mochila: this.inicializarMochila()
        });
    }
    //#endregion

    //#region EquipamentoParcial
    private inicializarColdre(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.COLDRE,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }

    private inicializarColete(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.COLETE,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }

    private inicializarJoelhiera(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.JOELHEIRA,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }

    private inicializarLuva(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.LUVA,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }

    private inicializarMascara(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.MASCARA,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }

    private inicializarMochila(): PecaEquipamentoEntity {
        return new PecaEquipamentoEntity({
            Tipo: TipoPecaEquipamento.MOCHILA,
            ChanceCritico: 6,
            DanoCritico: 10
        });
    }
    //#endregion
}