import  {UserData} from "./interface";

export const hasUserAalreadyFetched = (users: UserData[], userId: number) => {
    return !! users.filter(user => user.id ===userId)[0];
}