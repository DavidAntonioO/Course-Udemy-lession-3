import React from 'react';
import { CounterManagmentProps, CounterManagmentState, UserDataApi } from './interface';
import axios from 'axios';

class CounterManagment extends React.Component<CounterManagmentProps, CounterManagmentState> {
    constructor(props: CounterManagmentProps) {
        super(props);

        this.state ={
            user : 1,
            userData: {
                id: 1,
                email: '',
                first_name: '',
                last_name:  '',
                avatar:  '',
            }
        }

        console.log('constructor');
    }

    handleAddClick = () => {
        this.setState({ user:this.state.user + 1});
    }

    
    handleMinusClick = () => {
        this.setState({ user:this.state.user - 1});

    }

    fetchUserData = () => {
        axios.get('https://reqres.in/api/users/${this.state.user}')
        .then(response => {
            const userDataApi = response.data as UserDataApi;

            this.setState({ userData: userDataApi.data})
        })
    }

    componentDidMount(){
        this.fetchUserData();
    }


    componentDidUpdate(prevProps: CounterManagmentProps, prevState: CounterManagmentState, snapshot: any){
           if(prevState.user !== this.state.user){
               this.fetchUserData();
           }
      }

    render(){
        console.log('render');
        const { owerName } = this.props;
        const { user, userData } = this.state;
        const {first_name} = userData;

        return (
            <div>
                <h1>Counter Managment</h1>
                <h2>Owner Name: {owerName}</h2>
                <h3>UserId: {user}</h3>
                <h3>{first_name}</h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>

            </div>
        )  
    }
    
}

export default CounterManagment;