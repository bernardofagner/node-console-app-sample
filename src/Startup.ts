import { UserApplication } from "./Application/UserApplication";
import { ArrayCommand } from "./Commands/ArraysCommand";
import { ObjectCreationCommand } from "./Commands/ObjectCreationCommand";
import { StringCommand } from "./Commands/StringCommand";
import { Character } from "./Entities/ClassBased/Character";
import { StandardUser, VipUser } from "./Entities/ClassBased/User";
import { ManipulacaoArray } from "./Grazi/ManipulacaoArray";
import { ContractRepository } from "./Repositories/ContractRepository";

class Startup {

    private readonly ArrayCommand: ArrayCommand;
    private readonly ObjectCreationCommand: ObjectCreationCommand;
    private readonly UserApplication: UserApplication;
    private readonly StringCommand: StringCommand;

    private ShowArrayCommandMethods: boolean;
    private ShowObjectCreationCommandMethods: boolean;
    private ShowUserApplicationMethods: boolean;
    private ShowStringCommandMethods: boolean;
    private ShowExerciciosGrazi: boolean;

    constructor(
        arrayCommand: ArrayCommand,
        objectCreationCommand: ObjectCreationCommand,
        userApplication: UserApplication,
        stringCommand: StringCommand
    ) {
        this.ArrayCommand = arrayCommand;
        this.ObjectCreationCommand = objectCreationCommand;
        this.UserApplication = userApplication;
        this.StringCommand = stringCommand;

        this.ShowArrayCommandMethods = false;
        this.ShowObjectCreationCommandMethods = false;
        this.ShowUserApplicationMethods = false;
        this.ShowStringCommandMethods = false;
        this.ShowExerciciosGrazi = true;
    }

    public async Run() {

        console.log("------Program started------");
        this.ShowArrayCommandMethods && this.RunArrayExercices();
        this.ShowObjectCreationCommandMethods && this.RunObjectCreationMethods();
        this.ShowUserApplicationMethods && this.RunUserApplicationMethods();
        this.ShowStringCommandMethods && await this.RunStringCommandsMethods();

        this.ShowExerciciosGrazi && new ManipulacaoArray().Run();
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
        this.ArrayCommand.OrganizarNumerosParesEImpares();
    }

    public RunObjectCreationMethods(): void {

        this.ObjectCreationCommand.CreateClassBasedObject();
        this.ObjectCreationCommand.CreateInterfaceBasedObject();
    }

    public RunUserApplicationMethods(): void {

        console.log('Executing with a standard User');
        this.UserApplication.Execute(new StandardUser());

        console.log('Executing with a VIP User');
        this.UserApplication.Execute(new VipUser());
        console.log();
    }

    public async RunStringCommandsMethods(): Promise<void> {
        await this.StringCommand.EncontrarPadrao();
    }
}

const arrayCommand = new ArrayCommand();
const objectCreationCommand = new ObjectCreationCommand();
const stringCommand = new StringCommand();

const userAplication = new UserApplication(new ContractRepository('database connection string'));

new Startup(arrayCommand, objectCreationCommand, userAplication, stringCommand).Run();