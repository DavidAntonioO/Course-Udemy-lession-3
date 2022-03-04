import React from 'react';
import { Button } from '../Button';
import axios from 'axios';
import {UserDataAPI, UserManagmentProps, UserManagmentState } from './interface';
import './style.css';
import {hasUserAalreadyFetched } from './utils';

class UsersManagment extends React.Component<UserManagmentProps, UserManagmentState> {
    constructor(props: UserManagmentProps){
        super(props);

        this.state = {
            users: [],
            currentUserId: 1,
        }
    }

    fecthUser = async () => {
        const {currentUserId, users } = this.state;

        const response = await axios.get('https://reqres.in/api/users/${currentUserId}');
        const {data} = response.data  as UserDataAPI;

        this.setState({
            users: [
                ...users,
                data
            ]
        });
    }
    
    componentDidMount(){
        this.fecthUser();
    }

    componentDidUpdate(prevProps: UserManagmentProps, prevState: UserManagmentState){
        const{ currentUserId, users} = this.state;

        if(prevState.currentUserId !== this.state.currentUserId && !hasUserAalreadyFetched(users, currentUserId)){
            this.fecthUser();
        }
    }

    handleAddUserId = () => {
        const {currentUserId} = this.state;

        currentUserId < 10 && this.setState({
            currentUserId: currentUserId + 1
        });
    }

    handleMinusUserId = () => {
        const { currentUserId} = this.state;

        currentUserId > 1 && this.setState({
            currentUserId: currentUserId -1,
        });
    }

    renderUsers = () => {
        const { users, currentUserId } = this.state;

        return users.filter(user => user.id <= currentUserId).map(({avatar, first_name, last_name}) => {
            return(
                <div className='users-managment-container'>
                    <h1>Users Managment</h1>
                    <div className='users-container'>
                        {this.renderUsers()}
                    </div>
                    <p>Number of Users: {currentUserId}</p>
                    <div className='options'>
                        <Button onClick={this.handleAddUserId}>Add</Button>
                        <Button onClick={this.handleMinusUserId}>Minus</Button>
                    </div>
                </div>
            )
        })
    }
}

export default UsersManagment;