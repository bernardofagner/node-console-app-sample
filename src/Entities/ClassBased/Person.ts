export class Person {
    public FirstName: string;
    public LastName: string;
    public Age: number;
    private Biography: string;

    constructor(init?: Partial<Person>) {
        Object.assign(this, init);
    }

    public setBiography(biography: string): void {
        this.Biography = biography;
    }

    public getBiography(): string {
        return this.Biography;
    }

    public getFullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }
}