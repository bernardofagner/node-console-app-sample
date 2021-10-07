import { InputClass } from "./Utils/Console";

class Startup {
    public async Run() {
        console.log("------Programa iniciado------"); 
        console.log(await InputClass.Read());
    }
}

new Startup().Run();