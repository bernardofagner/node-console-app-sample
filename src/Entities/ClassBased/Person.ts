export class Person {
    //#region Properties
    public FirstName: string;
    public LastName: string;
    public Age: number;
    private Biography: string;
    //#endregion

    //#region Constructor
    constructor(init?: Partial<Person>) {
        Object.assign(this, init);
    }
    //#endregion

    //#region Methods
    public setBiography(biography: string): void {
        this.Biography = biography;
    }

    public getBiography(): string {
        return this.Biography;
    }

    public getFullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }
    //#endregion
}