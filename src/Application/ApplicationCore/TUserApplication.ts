import TAccreditedUser from "../../Entities/ClassBased/User";

export default interface TUserApplication {
    Execute(user: TAccreditedUser): any;
}