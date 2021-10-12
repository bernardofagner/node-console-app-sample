import { ArrayCommand } from "./Commands/ArraysCommand";
import { ObjectCreationCommand } from "./Commands/ObjectCreationCommand";

class Startup {

    private readonly ArrayCommand: ArrayCommand;
    private readonly ObjectCreationCommand: ObjectCreationCommand;

    constructor(arrayCommand: ArrayCommand, objectCreationCommand) {
        this.ArrayCommand = arrayCommand;
        this.ObjectCreationCommand = objectCreationCommand;
    }

    public async Run() {
        console.log("------Program started------");

        this.RunArrayExercices();
        this.RunObjectCreationMethods();

        console.log("------Program finished------");
    }

    public RunArrayExercices(): void {
        console.log(`Saida: ${this.ArrayCommand.EncontrarUmElementoArraySemRepeticao(3) ? 'Encontrou' : 'Não encontrou'}`);        
        console.log(`Saida: ${this.ArrayCommand.EncontrarUmElementoArraySemRepeticao(302) ? 'Encontrou' : 'Não encontrou'}`);

        this.ArrayCommand.CriarArrayElementosDistintos();
        this.ArrayCommand.EncontrarMaiorValor();
        this.ArrayCommand.EncontrarMenorValor();
        this.ArrayCommand.OrdenarArrayNumerico();
        this.ArrayCommand.OrdenarArrayDeObjetos();
    }

    public RunObjectCreationMethods(): void {
        this.ObjectCreationCommand.CreateClassBasedObject();
        this.ObjectCreationCommand.CreateInterfaceBasedObject();
    }
}

const arrayCommand = new ArrayCommand();
const objectCreationCommand = new ObjectCreationCommand();

new Startup(arrayCommand, objectCreationCommand).Run();