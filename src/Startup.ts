import { TheDivisionApplication } from "./Application/TheDivisionApplication"
import { TimeoutAplication } from "./Application/TimeoutApplication";
import { ContractRepository } from "./Repositories/ContractRepository";
class Startup {

    constructor() {  }

    public async Run() {
        console.log("------Program started------");
        // this.executarTheDivisionApplication();
        await this.executarTimeoutApplication();
        console.log("------Program finished------");
    }

    private executarTheDivisionApplication(): void {
        const theDivisionApplication = new TheDivisionApplication();
        theDivisionApplication.Execute();
    }

    private async executarTimeoutApplication(): Promise<void> {
        const timeoutApplication = new TimeoutAplication();
        await timeoutApplication.Execute();
    }
}

new Startup().Run();