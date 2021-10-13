/*Interface abstrai o método de exibição de credenciais, para que qualquer tipo de cliente possa
exibir sua respectiva credencial. Essa abordagem é muito útil quando é necessário determinar um comportamento
diferente para classe, mas com uma única abstração (definida na interface).

Um bom exemplo deste tipo de aplicação é na criação de uma classe para tratamento de erros. A interface implementada,
por exemplo <TErrorHandling> disponibiliza o método para tratamento de erros <HandleError(): void> A implementação dele fica a critério da classe que implementa a interface..*/
export default interface TAccreditedUser {
    UserCredential: string;

    ShowCredential(): string;
}

export class StandardUser implements TAccreditedUser {

    public UserCredential: string = 'Standard Credential: 564-547-00';

    constructor(init?: Partial<StandardUser>) {
        Object.assign(this, init);
    }

    ShowCredential(): string {
        return this.UserCredential;
    }
}

export class VipUser implements TAccreditedUser {

    public UserCredential: string = 'Vip Credential: 702-521-54';

    constructor(init?: Partial<VipUser>) {
        Object.assign(this, init);
    }

    public ShowCredential(): string {
        return this.UserCredential;
    }
}
