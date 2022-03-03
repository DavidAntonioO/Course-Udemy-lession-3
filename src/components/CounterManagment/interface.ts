export interface CounterManagmentProps {
    owerName: string;
}

export interface CounterManagmentState{
    user: number;
    userData: UserData;
}

export interface UserData {
    id: number;
		email: string;
		first_name: string;
		last_name: string;
		avatar: string;
}

export interface UserDataApi{
   data: UserData
}