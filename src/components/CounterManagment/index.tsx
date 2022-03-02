import React from 'react';
import { CounterManagmentProps, CounterManagmentState } from './interface';
import axios  from 'axios';

class CounterManagment extends React.Component<CounterManagmentProps, CounterManagmentState>{
    constructor(props: CounterManagmentProps){
        super(props);

        this.state = {
            counter: 0,
            users: []
        }
    }

    handleAddClick = () => {
        this.setState(function(prevState){
            return {
                counter: prevState.counter + 1
            }
        }, function(){
            console.log('callback function');
        });
    }

    handleMinusClick = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    static getDrivedStateFromProps(props:CounterManagmentProps, state: CounterManagmentState){
        console.log('getDrivedStateFromProps');
        return props.ownerName === "David" ? {conter: 5 } : null;
    }

    clickWindow = () => {
        console.log('clickWindow Event occur')
        this.setState({counter: this.state.counter + 1 });
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
            const data = response.data;

            const users = data.data.map((userData: any) => userData.first_name);

            this.setState({ users });
        })

        window.addEventListener('click', this.clickWindow)
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.clickWindow)
    }

    render(){
        console.log('render');
        const {ownerName} = this.props;
        const {counter, users} = this.state;
        return(
            <div>
                <h1>Counter Managment</h1>
                <h2>owner Name: {ownerName}</h2>
                <h3>Counter: {counter} </h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
                <ul>
                    {users.map(user => <li>{user}</li>)}
                </ul>
            </div>
        )
    }
}

export default CounterManagment;