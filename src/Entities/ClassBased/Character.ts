class Character {
    
    public UserId: number;
    public Name: string;

    constructor(init?: Partial<Character>) {
        Object.assign(this, init);
    }

    //Utilizando o this para referenciar a própria instancia
    public ShowCharacterNameAndId(this: Character): void {
        console.log(`${this.Name} - ${this.UserId}`);
    }
}

export { Character };