import { UserApplication } from "./Application/UserApplication";
import { TheDivisionApplication } from "./Application/TheDivisionApplication"
import { ContractRepository } from "./Repositories/ContractRepository";

class Startup {

    constructor() {  }

    public async Run() {
        console.log("------Program started------");
        this.executarTheDivisionApplication();        
        console.log("------Program finished------");
    }

    private executarTheDivisionApplication(): void {
        const theDivisionApplication = new TheDivisionApplication();
        theDivisionApplication.Execute();
    }
}

new Startup().Run();