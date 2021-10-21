export class ManipulacaoArray {
    public A: Array<number> = [1, 3, 5, 4, 7, 6, 2, 8, 5, 9];

    public Run(): void {
        const value = 4;
        // Math.round(Math.random()*10);
        console.log(this.encontrarValorNoArray(value));
    }

    private encontrarValorNoArray(valorNumerico: number): boolean {
        for(let i = 0; i < this.A.length; i++){
            if(valorNumerico === this.A[i]) {
                return true;
            }
        }
        return false;
    }
}