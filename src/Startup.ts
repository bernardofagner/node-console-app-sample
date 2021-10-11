import { ArrayCommand } from "./Commands/ArraysCommand";

class Startup {

    private readonly ArrayCommand: ArrayCommand = new ArrayCommand();

    public async Run() {
        console.log("------Program started------");
        console.log();

        console.log(`Saida: ${this.ArrayCommand.EncontrarUmElementoArraySemRepeticao(3) ? 'Encontrou' : 'Não encontrou'}`);        
        console.log(`Saida: ${this.ArrayCommand.EncontrarUmElementoArraySemRepeticao(302) ? 'Encontrou' : 'Não encontrou'}`);

        this.ArrayCommand.CriarArrayElementosDistintos();
        this.ArrayCommand.EncontrarMaiorValor();
        this.ArrayCommand.EncontrarMenorValor();
        this.ArrayCommand.OrdenarArrayNumerico();

        console.log("------Program finished------");
    }
}

new Startup().Run();