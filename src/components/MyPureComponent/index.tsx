import React from 'react';
import MyReactMemo from '../MyReactMemo';
import { MyPureComponentProps, MyPureComponentState } from './interface';

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState>{
    constructor(props: MyPureComponentProps){
        super(props);

        this.state = {
            name: 'Mahesh',
            address: {
                city: 'MyCity',
                state: 'MyState'
            }
        }
    }

    handleState = () => {
        const newAddres = {
            city: 'New City',
           state: 'MyState'
        };
        this.setState({
            address: newAddres
        })
    }

    render(){
        
        const {name,address } = this.state;
        return(
            <>
                <h1>Pure Component</h1>
                <MyReactMemo name ={name} address= {address}/>
                <button onClick={this.handleState}>Set State</button>
            </>
        )
    }
}