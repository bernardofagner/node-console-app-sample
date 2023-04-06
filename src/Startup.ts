import { UserApplication } from "./Application/UserApplication";
import { ContractRepository } from "./Repositories/ContractRepository";

class Startup {

    constructor() {  }

    public async Run() {
        console.log("------Program started------");
        this.executarUserApplication();
        
        console.log("------Program finished------");
    }

    private executarUserApplication(): void {
        const userAplication = new UserApplication();
        userAplication.Execute();
    }
}

new Startup().Run();