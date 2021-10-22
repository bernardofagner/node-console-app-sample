export class ManipulacaoArray {
    public VetorA: Array<number> = [1, 3, 5, 4, 7, 6, 2, 8, 5, 9];
    public VetorB: Array<number> = [4, 3, 5, 6, 1, 3, 2, 4, 1, 7, 5, 50, 4];
  
    public Run(): void {
        const value = 50;
        // Math.round(Math.random()*20);
        console.log('Elemento no vetor sem repetição:', this.encontrarUmElementoNoArraySemRepeticao(value), '\n');
        console.log('Elemento no vetor com repetição:', this.encontrarUmElementoNoArrayComRepeticao(value), '\n');
        this.criarVetorDeElementosNaoRepetidos();
    }

    // Não pode usar array.prototype.find()
    private encontrarUmElementoNoArraySemRepeticao(elemento: number): boolean {
        console.log(`Array sem repetição: [${this.VetorA}]`);
        console.log('O valor aleatório a ser buscado no array é:', elemento);

        for(let i = 0; i < this.VetorA.length; i++){
            if(this.VetorA[i] === elemento) {
                return true;
            }
        }
        return false;
    }

    private encontrarUmElementoNoArrayComRepeticao(elemento: number): boolean {
        console.log(`Array com repetição: [${this.VetorB}]`);
        console.log('O valor aleatório a ser buscado no array é:', elemento);

        for(let i = 0; i < this.VetorB.length; i++){
            if(this.VetorB[i] === elemento) {
                return true;
            }
        }
        return false;
    }

        /* Criar um vetor de elementos não repetidos a partir dos elementos de um vetor com elementos repetidos. Não pode usar array.prototype.filter() */
    private criarVetorDeElementosNaoRepetidos(): void {
        const cestaCheia = this.VetorB;
        console.log(`Vetor original: [${cestaCheia}]`);

        const cestaVazia: Array<number> = [];
        console.log('Criação vetor: ', cestaVazia);

        for(let i = 0; i < cestaCheia.length; i++){
            const found = cestaVazia.find(element => element === cestaCheia[i]);
            if(!found){
                cestaVazia.push(cestaCheia[i])
            }
        }
        console.log('Cesta atualizada:', cestaVazia);
    }
}




