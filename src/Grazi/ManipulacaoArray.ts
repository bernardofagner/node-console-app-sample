export class ManipulacaoArray {
    public A: Array<number> = [1, 3, 5, 4, 7, 6, 2, 8, 5, 9];
    public B: Array<number> = [4, 3, 5, 6, 1, 3, 2, 4, 1, 7, 5, 6, 4];
  
    public Run(): void {
        const value = Math.round(Math.random()*20);
        console.log('Resposta:', this.encontrarUmElementoNoArraySemRepeticao(value), '\n');

        this.criarVetorDeElementosNaoRepetidos();
    }

    // Não pode usar array.prototype.find()
    private encontrarUmElementoNoArraySemRepeticao(elemento: number): boolean {
        console.log(`Array sem repetição: [${this.A}]`);
        console.log('O valor aleatório a ser buscado no array é:', elemento);

        for(let i = 0; i < this.A.length; i++){
            if(this.A[i] === elemento) {
                return true;
            }
        }
        return false;
    }

    /* Criar um vetor de elementos não repetidos a partir dos elementos de um vetor com elementos repetidos. Não pode usar array.prototype.filter() */
    private criarVetorDeElementosNaoRepetidos(): void {
        const vetorOriginal = this.B;
        console.log(`Vetor original: [${vetorOriginal}]`);

        const vetorCriadoSemRepeticao: Array<number> = [];
        console.log('Criação vetor: ', vetorCriadoSemRepeticao);

        for(let i = 0; i < vetorOriginal.length; i++){
            if(!this.encontrarUmElementoNoArraySemRepeticao(vetorOriginal[i]) === true){
                vetorCriadoSemRepeticao.push(vetorOriginal[i]);
            }
        }
    }

// se  \    
    // private criarVetorDeElementosNaoRepetidos(): void{
    //     const vetorFiltrado: Array<number> =  [];
    //     let i = 0;

    //     for(let i = 0; i < this.encontrarValorNoArray.length; i++){       
    //     } 

    //     console.log('Vetor filtrado', vetorFiltrado);
    // }
}

// if(vetorFiltrado != this.encontrarValorNoArray[i]) 
// vetorFiltrado.push(this.B[i]); 
//     if(this.B[i] !== vetorFiltrado[]){
//         vetorFiltrado.push(this.B[i]);
//     } 