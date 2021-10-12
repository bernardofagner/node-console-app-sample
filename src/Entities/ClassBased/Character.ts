class Character {
    public UserId: number;
    public Name: string;

    constructor(init?: Partial<Character>) {
        Object.assign(this, init);
    }
}

export { Character };