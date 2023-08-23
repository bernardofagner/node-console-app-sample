export class JoelheiraEntity {
    Protecao: number = 0;
    DanoDeArma: number = 0;
    ChanceCritico: number = 0;
    DanoCritico: number = 0;
    AceleraçãoHabilidade: number = 0;
    DanoHabilidade: number = 0;

    constructor(init?: Partial<JoelheiraEntity>) {
        Object.assign(this, init);
    }
}