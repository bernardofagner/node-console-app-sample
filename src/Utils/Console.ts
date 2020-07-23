const io = require('console-read-write');

export class InputClass {

    private static input;
    constructor() { }

    public static async read(message: string) {

        this.input = await io.read();

        if (Number(this.input)) {
            return Number(this.input)
        }
        else {
            return this.input.toString();
        }
    }
}