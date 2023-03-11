import { visitLexicalEnvironment } from "typescript";

export class ManipulacaoArray {
    public VetorA: Array<number> = [1, 3, 5, 4, 7, 6, 2, 8, 5, 9];
    public VetorB: Array<number> = [4, 3, 5, 6, 1, 3, 2, 4, 1, 7, 5, 50, 4];
  
    public Run(): void {
        const value = 50;
        console.log('Elemento presente no vetor sem repetição:', this.encontrarUmElementoNoArraySemRepeticao(value), '\n');
        console.log('Elemento presente no vetor com repetição:', this.encontrarUmElementoNoArrayComRepeticao(value), '\n');

        this.criarVetorDeElementosNaoRepetidos();

        const vetor = this.VetorB;
        this.encontraMaiorElementoNoVetor(this.VetorA);
        this.encontraMenorElementoNoVetor(this.VetorA);
        this.organizaElementos(vetor);
    }

    // Não pode usar array.prototype.find()
    private encontrarUmElementoNoArraySemRepeticao(elemento: number): boolean {
        console.log();
        console.log('Encontrar um elemento em um array desordenado sem números repetidos')
        console.log(`Vetor original: [${this.VetorA}]`);
        console.log('Elemento a ser buscado no array:', elemento);

        for(let i = 0; i < this.VetorA.length; i++){
            if(this.VetorA[i] === elemento) {
                return true;
            }
        }
        return false;
    }

    private encontrarUmElementoNoArrayComRepeticao(elemento: number): boolean {
        console.log();
        console.log('Encontrar um elemento em um array desordenado com números repetidos')
        console.log(`Vetor original: [${this.VetorB}]`);
        console.log('Elemento a ser buscado no array:', elemento);

        for(let i = 0; i < this.VetorB.length; i++){
            if(this.VetorB[i] === elemento) {
                return true;
            }
        }
        return false;
    }

    /* Criar um vetor de elementos não repetidos a partir dos elementos de um vetor com elementos repetidos. Não pode usar array.prototype.filter() */
    private criarVetorDeElementosNaoRepetidos(): void {
        const vetorOriginal = this.VetorB;        
        const vetorElementosNaoRepetidos: Array<number> = [];

        console.log();
        console.log('Criar vetor sem elementos repetidos')
        console.log(`Vetor original: [${vetorOriginal}]`);


        for(let i = 0; i < vetorOriginal.length; i++){
            const found = vetorElementosNaoRepetidos.find(element => element === vetorOriginal[i]);
            if(!found){
                vetorElementosNaoRepetidos.push(vetorOriginal[i])
            }
        }
        console.log(`Novo vetor: [${vetorElementosNaoRepetidos}]`);
    }

    /* 3 - Escreva um algoritmo que encontre o maior valor numerico presente no vetor A. O resultado deve ser exibido no console. Não pode usar a função Math.max() */
    private encontraMaiorElementoNoVetor(vetor: Array<number>): void{
        console.log();
        console.log('Encontrar maior elemento em um vetor')
        console.log(`Vetor original: [${vetor}]`);
        
        let maiorNumero = Number.MIN_VALUE; 
        
        for(let i = 0; i < vetor.length; i++){            
            if(vetor[i] > maiorNumero){
                maiorNumero = vetor[i];
            }
        }
        console.log('O maior número do vetor é: ', maiorNumero);
    }

    private encontraMenorElementoNoVetor(vetor: Array<number>): void{
        console.log();
        console.log('Encontrar menor elemento em um vetor')
        console.log(`Vetor original: [${vetor}]`);
        
        let menorNumero = Number.MAX_VALUE;
        
        for(let i = 0; i < vetor.length; i++){ 
            if(vetor[i]< menorNumero){
                menorNumero = vetor[i];
            }
        }
        console.log('O menor número do vetor é: ', menorNumero);
    }

    private organizaElementos(vetor: Array<number>): void {
        console.log('');
        console.log('Organiza vetor colocando elementos pares no início.');
        console.log(`Vetor original: [${vetor}]`);        
    
        let i = 0; 
        let j = i+1;
        let aux = 0; 

        do {
            // vetor[i] ímpar e vetor[j] par
            if(vetor[i] %2 !==0 && vetor[j] %2 === 0){
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux; 
                i++; 
                j++;
            }
            // vetor[i] ímpar e vetor[j] ímpar
            else if(vetor[i] %2 !==0 && vetor[j] %2 !== 0){
                j++;
            }

            //vetor[i] par e vetor[j] par
            else if(vetor[i] %2 === 0 && vetor[j] %2 !== 0){
                i++;
                j++;
            }

            else {
                vetor[i] = vetor[i];
                j++;
            }
        } while(i < vetor.length && j < vetor.length);
        console.log(`Vetor atualizado: [${vetor}]`);
    }
}



