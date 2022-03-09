import React from 'react';

export interface MyContextType{
    users: string[];
    updateUser(user: string): any;
}

export const MyContext = React.createContext<MyContextType>({
    users: ['David','Mahesh'],
    updateUser:() => {}
});

interface MyProviderState{
    users: string[];
}

export class MyContextProvider extends React.Component<{}, MyProviderState>{
    constructor(props: {}){
        super(props);

        this.state = {
            users:['David','Mahesh'],
        }
    }

    handleUpdateUser = (user: string) => {
        this.setState({
            users: [...this.state.users, user]
        });
    }
        render () {
            return(
               <MyContext.Provider value= {{
                    users: this.state.users,
                    updateUser: this.handleUpdateUser
               }}>
                   {this.props.children}
               </MyContext.Provider>
            )
        }
}