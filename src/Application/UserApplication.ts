import { TUserApplication } from "../ApplicationCore/TUserApplication";

/**Aplicação da primeira e segunda lei Solid - Open-Close Principle. Neste exemplo, não importa o tipo de usuário, a credencial correta sempre será exibida.
 * 
 * Existem outras abordagens, mas essa é a mais suscinta.*/
export class UserApplication implements TUserApplication {

    Execute(): void {
        console.log(`UserApplication executando...`)
    }

    
}