//import readline from 'readline';

import { InputClass } from "./Utils/Console";

class Startup {
    public async Run() {
        //TODO: Implementar seu programa aqui
        console.log("------Programa iniciado------");
        await InputClass.read("Escreva:");
    }
}

//inicializa a execução do programa
new Startup().Run();