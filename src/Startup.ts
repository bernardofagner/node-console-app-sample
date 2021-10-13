import { UserApplication } from "./Application/UserApplication";
import { ArrayCommand } from "./Commands/ArraysCommand";
import { ObjectCreationCommand } from "./Commands/ObjectCreationCommand";
import { StandardUser, VipUser } from "./Entities/ClassBased/User";
import { ContractRepository } from "./Repositories/ContractRepository";

class Startup {

    private readonly ArrayCommand: ArrayCommand;
    private readonly ObjectCreationCommand: ObjectCreationCommand;
    private readonly UserApplication: UserApplication;

    private ShowArrayCommandMethods: boolean;
    private ShowObjectCreationCommandMethods: boolean;
    private ShowUserApplicationMethods: boolean;

    constructor(
        arrayCommand: ArrayCommand,
        objectCreationCommand: ObjectCreationCommand,
        userApplication: UserApplication) {
        this.ArrayCommand = arrayCommand;
        this.ObjectCreationCommand = objectCreationCommand;
        this.UserApplication = userApplication;

        this.ShowArrayCommandMethods = false;
        this.ShowObjectCreationCommandMethods = false;
        this.ShowUserApplicationMethods = true;
    }

    public async Run() {

        console.log("------Program started------");
        this.ShowArrayCommandMethods && this.RunArrayExercices();
        this.ShowObjectCreationCommandMethods && this.RunObjectCreationMethods();
        this.ShowUserApplicationMethods && this.RunUserApplicationMethods();
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

    public RunUserApplicationMethods(): void {

        console.log('Executing with a standard User');
        this.UserApplication.Execute(new StandardUser());

        console.log('Executing with a VIP User');
        this.UserApplication.Execute(new VipUser());
        console.log();
    }
}

const arrayCommand = new ArrayCommand();
const objectCreationCommand = new ObjectCreationCommand();

const userAplication = new UserApplication(new ContractRepository('database connection string'));

new Startup(arrayCommand, objectCreationCommand, userAplication).Run();