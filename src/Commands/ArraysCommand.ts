class ArrayCommand {

    private readonly VetorNumericoDesordenadoSemRepeticao: Array<number> = [4, 3, 2, 6, 8, 12, 34, 54, 1, 6];
    private readonly VetorNumericoDesordenadoComRepeticao: Array<number> = [5, 3, 2, 6, 3, 12, 3, 6, 1, 6];

    constructor() { }

    /* Criar um método para encontrar um determinado elemento no array, retornar 'true' caso encontre ou 'false' caso não encontre;
    Não pode usar o metodo array.find() */
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

    /* Criar um método para criar um array com elementos distindos a partir de um array com elementos repetidos
    Não pode usar o método array.filter()*/
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

    /*Criar um método para encontrar o elemento com o maior valor em um array numérico
    Não pode usar o método Math.max()*/
    public EncontrarMaiorValor() {
        console.log();
        console.log('EncontrarMaiorValor - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);
        let maiorVAlor = Number.MIN_VALUE;
        for(let valor of this.VetorNumericoDesordenadoComRepeticao) {
            if (valor > maiorVAlor) {
                maiorVAlor = valor;
            }
        }

        console.log(`Maior valor: ${maiorVAlor}`);
    }

    /*Criar um método para encontrar o elemento com o menor valor em um array numérico
    Não pode usar o método Math.max()*/
    public EncontrarMenorValor() {
        console.log();
        console.log('EncontrarMenorValor - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);
        let menorValor = Number.MAX_VALUE;
        for(let valor of this.VetorNumericoDesordenadoComRepeticao) {
            if (valor < menorValor) {
                menorValor = valor;
            }
        }

        console.log(`Menor valor: ${menorValor}`);
    }
}

export { ArrayCommand };