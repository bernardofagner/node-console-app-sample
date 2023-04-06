import { TDivisioApplication } from "../ApplicationCore/TTheDivisioApplication";
import { ColdreEntity } from "../Entities/The Division/Equipamento/ColdreEntity";
import { ColeteEntity } from "../Entities/The Division/Equipamento/ColeteEntity";
import { EquipamentoEntity } from "../Entities/The Division/Equipamento/EquipamentoEntity";
import { JoelheiraEntity } from "../Entities/The Division/Equipamento/JoelheiraEntity";
import { LuvaEntity } from "../Entities/The Division/Equipamento/LuvaEntity";
import { MascaraEntity } from "../Entities/The Division/Equipamento/MascaraEntity";
import { MochilaEntity } from "../Entities/The Division/Equipamento/MochilaEntity";
import { PersonagemEntity } from "../Entities/The Division/Personagem/PersonagemEntity";

export class TheDivisionApplication implements TDivisioApplication {
    
    Execute(): void {
        console.log("=> Executando TheDivisionApplication...\n");
        const equipamento = this.inicializarEquipamento();
        const personagem = this.inicializarPersonagem(equipamento);
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
            Luva: new LuvaEntity(),
            Mascara: new MascaraEntity(),
            Mochila: new MochilaEntity()
        });
    }
    //#endregion

    //#region EqiopamentoParcial
    private inicializarColdre(): ColdreEntity {
        return new ColdreEntity({
            ChanceCritico: 10,
            DanoCritico: 10
        });
    }

    private inicializarColete(): ColeteEntity {
        return new ColeteEntity({
            ChanceCritico: 10,
            DanoCritico: 10
        });
    }

    private inicializarJoelhiera(): JoelheiraEntity {
        return new JoelheiraEntity({
            ChanceCritico: 10,
            DanoCritico: 10
        });
    }

    private inicializarLuva(): LuvaEntity {
        return new LuvaEntity({
            ChanceCritico: 10,
            DanoCritico: 10
        });
    }
    //#endregion

    
}