export interface UserData{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar:string;

}

export interface UserDataAPI{
    data: UserData;
}

export interface UserManagmentProps {}

export interface UserManagmentState {
    users: UserData[];
    currentUserId: number;
}