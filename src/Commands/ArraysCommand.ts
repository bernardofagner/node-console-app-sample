class ArrayCommand {

    private readonly VetorNumericoDesordenadoSemRepeticao: Array<number> = [4, 3, 2, 6, 8, 12, 34, 54, 1, 6];
    private readonly VetorNumericoDesordenadoComRepeticao: Array<number> = [5, 3, 2, 6, 3, 12, 3, 6, 1, 6];

    constructor() { }

    //Não pode usar o metodo array.find()
    public EncontrarUmElementoArraySemRepeticao(chave: number): boolean {
        console.log();
        console.log('EncontrarUmElemento - Array desordenado sem repetir elemento');
        for (let i = 0; i < this.VetorNumericoDesordenadoSemRepeticao.length; i++) {
            if (this.VetorNumericoDesordenadoSemRepeticao[i] === chave) {
                return true;
            }
        }

        return false;
    }

    //Não pode usar o método array.filter()
    public CriarArrayElementosDistintos() {
        console.log();
        console.log('CriarArrayElementosDistintos - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);

        const arrayResultante: Array<number> = [];
        for(let i = 0; i < this.VetorNumericoDesordenadoComRepeticao.length; i++) {
            if (!arrayResultante.find(elemento => elemento === this.VetorNumericoDesordenadoComRepeticao[i])) {
                arrayResultante.push(this.VetorNumericoDesordenadoComRepeticao[i]);
            }
        }

        console.log(`Vetor resultante: ${arrayResultante}`);
    }
}

export { ArrayCommand };