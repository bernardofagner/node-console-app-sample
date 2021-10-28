"use strict";
exports.__esModule = true;
exports.ManipulacaoArray = void 0;
var ManipulacaoArray = /** @class */ (function () {
    function ManipulacaoArray() {
        this.VetorA = [1, 3, 5, 4, 7, 6, 2, 8, 5, 9];
        this.VetorB = [4, 3, 5, 6, 1, 3, 2, 4, 1, 7, 5, 50, 4];
    }
    ManipulacaoArray.prototype.Run = function () {
        var value = 50;
        console.log('Elemento presente no vetor sem repetição:', this.encontrarUmElementoNoArraySemRepeticao(value), '\n');
        console.log('Elemento presente no vetor com repetição:', this.encontrarUmElementoNoArrayComRepeticao(value), '\n');
        this.criarVetorDeElementosNaoRepetidos();
        var vetor = [7, 6, 45, 34, 76, 3, 21, 105, 43, 282, 10, 2.5];
        this.encontraMaiorElementoNoVetor(vetor);
        this.encontraMenorElementoNoVetor(vetor);
    };
    // Não pode usar array.prototype.find()
    ManipulacaoArray.prototype.encontrarUmElementoNoArraySemRepeticao = function (elemento) {
        console.log();
        console.log('Encontrar um elemento em um array desordenado sem números repetidos');
        console.log("Vetor original: [" + this.VetorA + "]");
        console.log('Elemento a ser buscado no array:', elemento);
        for (var i = 0; i < this.VetorA.length; i++) {
            if (this.VetorA[i] === elemento) {
                return true;
            }
        }
        return false;
    };
    ManipulacaoArray.prototype.encontrarUmElementoNoArrayComRepeticao = function (elemento) {
        console.log();
        console.log('Encontrar um elemento em um array desordenado com números repetidos');
        console.log("Vetor original: [" + this.VetorB + "]");
        console.log('Elemento a ser buscado no array:', elemento);
        for (var i = 0; i < this.VetorB.length; i++) {
            if (this.VetorB[i] === elemento) {
                return true;
            }
        }
        return false;
    };
    /* Criar um vetor de elementos não repetidos a partir dos elementos de um vetor com elementos repetidos. Não pode usar array.prototype.filter() */
    ManipulacaoArray.prototype.criarVetorDeElementosNaoRepetidos = function () {
        var vetorOriginal = this.VetorB;
        var vetorElementosNaoRepetidos = [];
        console.log();
        console.log('Criar vetor sem elementos repetidos');
        console.log("Vetor original: [" + vetorOriginal + "]");
        var _loop_1 = function (i) {
            var found = vetorElementosNaoRepetidos.find(function (element) { return element === vetorOriginal[i]; });
            if (!found) {
                vetorElementosNaoRepetidos.push(vetorOriginal[i]);
            }
        };
        for (var i = 0; i < vetorOriginal.length; i++) {
            _loop_1(i);
        }
        console.log("Novo vetor: [" + vetorElementosNaoRepetidos + "]");
    };
    /* 3 - Escreva um algoritmo que encontre o maior valor numerico presente no vetor A. O resultado deve ser exibido no console. Não pode usar a função Math.max() */
    ManipulacaoArray.prototype.encontraMaiorElementoNoVetor = function (vetor) {
        console.log();
        console.log('Encontrar maior elemento em um vetor');
        console.log("Vetor original: [" + vetor + "]");
        var maiorNumero = 0;
        for (var i = 0; i < vetor.length; i++) {
            var valorAtual = vetor[i];
            if (valorAtual > maiorNumero) {
                maiorNumero = valorAtual;
            }
        }
        console.log('O maior número do vetor é: ', maiorNumero);
    };
    ManipulacaoArray.prototype.encontraMenorElementoNoVetor = function (vetor) {
        console.log();
        console.log('Encontrar menor elemento em um vetor');
        console.log("Vetor original: [" + vetor + "]");
        var menorNumero;
        for (var i = 0; i < vetor.length; i++) {
            var valorAtual = vetor[i];
            if (valorAtual > menorNumero) {
                menorNumero = menorNumero;
            }
            else {
                menorNumero = valorAtual;
            }
        }
        console.log('O menor número do vetor é: ', menorNumero);
    };
    return ManipulacaoArray;
}());
exports.ManipulacaoArray = ManipulacaoArray;
