import React from 'react';
import { CounterManagmentProps, CounterManagmentState } from './interface';

class CounterManagment extends React.Component<CounterManagmentProps, CounterManagmentState>{
    constructor(props: CounterManagmentProps){
        super(props);

        this.state = {
            counter: 0
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

    render(){
        console.log('render');
        const {ownerName} = this.props;
        const {counter} = this.state;
        return(
            <div>
                <h1>Counter Managment</h1>
                <h2>owner Name: {ownerName}</h2>
                <h3>Counter: {counter} </h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
            </div>
        )
    }
}

export default CounterManagment;