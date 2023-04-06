import { UserApplication } from "./Application/UserApplication";
import { TheDivisionApplication } from "./Application/TheDivisionApplication"
import { ContractRepository } from "./Repositories/ContractRepository";

class Startup {

    constructor() {  }

    public async Run() {
        console.log("------Program started------");
        this.executarUserApplication();
        
        console.log("------Program finished------");
    }

    private executarUserApplication(): void {
        const theDivisionApplication = new TheDivisionApplication();
        theDivisionApplication.Execute();
    }
}

new Startup().Run();