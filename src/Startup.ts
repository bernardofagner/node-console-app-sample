import { InputClass } from "./Utils/Console";

class Startup {
    public async Run() {
        console.log("------Program started------");
        console.log();

        console.log('Please, write a message...');
        const message = await InputClass.Read();
        console.log(`Your message is: <${message}>`);

        console.log("------Program finished------");
    }
}

new Startup().Run();