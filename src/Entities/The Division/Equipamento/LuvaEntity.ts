export class LuvaEntity {
    Protecao: number = 0;
    DanoDeArma: number = 0;
    ChanceCritico: number = 0;
    DanoCritico: number = 0;
    AceleraçãoHabilidade: number = 0;
    Danohabilidade: number = 0;

    constructor(init?: Partial<LuvaEntity>) {
        Object.assign(this, init);
    }
}