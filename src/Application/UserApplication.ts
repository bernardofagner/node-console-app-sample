import TUserApplication from "../ApplicationCore/TUserApplication";
import TAccreditedUser from "../Entities/ClassBased/User";

/**Aplicação da primeira e segunda lei Solid - Open-Close Principle. Neste exemplo, não importa o tipo de usuário, a credencial correta sempre será exibida.
 * 
 * Existem outras abordagens, mas essa é a mais suscinta.*/
class UserApplication implements TUserApplication {
    public Execute(user: TAccreditedUser): void {
        console.log(user.ShowCredential());
    }
}

export { UserApplication };