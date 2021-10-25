import { InputClass } from "../Utils/Console";

class StringCommand {

    private readonly Texto: string = `At home drawing pictures
    Of mountain tops
    With him on top
    Lemon yellow sun
    Arms raised in a V
    And the dead lay in pools of maroon below
    Daddy didn't give attention
    Oh, to the fact that mommy didn't care
    King Jeremy the wicked
    Oh, ruled his world
    Jeremy spoke in class today
    Jeremy spoke in class today
    Clearly I remember
    Pickin' on the boy
    Seemed a harmless little fuck
    But we unleashed the lion
    Gnashed his teeth and bit the recess lady's breast
    How could I forget
    And he hit me with a surprise left
    My jaw left hurting
    Dropped wide open
    Just like the day
    Oh, like the day I heard
    Daddy didn't give affection, no
    And the boy was something that mommy wouldn't wear
    King Jeremy the wicked
    Oh ruled his world
    Jeremy spoke in class today
    Jeremy spoke in class today
    Jeremy spoke in class today
    Try to forget this (try to forget this)
    Try to erase this (try to erase this)
    From the blackboard
    Jeremy spoke in class today
    Jeremy spoke in class today
    Jeremy spoke in
    Spoke in
    Jeremy spoke in
    Spoke in
    Jeremy spoke in class today`;

    constructor() { };

    public async EncontrarPadrao(): Promise<void> {
        await this.EncontrarPadraoTexto(this.Texto);
    }

    private async EncontrarPadraoTexto(texto: string): Promise<number> {
        console.log(this.Texto);
        let contadorDeOcorrencias: number;
        let entrada: string = 'Sair';
        const sair = ['sair', 's'];

        do {
            contadorDeOcorrencias = 0;
            console.log('Insira uma substring:');
            entrada = (await InputClass.Read()).toString();
            let i: number = 0;            

            while(i < this.Texto.length) {

                if(this.Texto[i] === entrada[0]) {
                    let match = 1;
                    for(let j = 1; j < entrada.length ; j++) {
                        if (this.Texto[i+j] === entrada[j]) {
                            match++;
                        }
                        else {
                            break;
                        }
                    }

                    if (match === entrada.length) {
                        contadorDeOcorrencias++;
                    }
                }
                i++;
            }

            console.log('Ocorencias: ', contadorDeOcorrencias);
        } while (!sair.includes(entrada.toLowerCase()));

        console.log('EncontrarPadraoTexto() finalizado.');
        return contadorDeOcorrencias;
    }
}

export { StringCommand };