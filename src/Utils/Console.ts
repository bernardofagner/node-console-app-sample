const io = require('console-read-write');

export class InputClass {

    private static input: any;
    constructor() { }

    /**
     * @description This method is responsible for read a input from console
     * @returns The string or number readed from console
     */
    public static async Read() {

        this.input = await io.read();

        if (Number(this.input)) {
            return Number(this.input)
        }
        else {
            return this.input.toString();
        }
    }
}