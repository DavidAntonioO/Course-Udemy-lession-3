import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagment from './components/CounterManagment';

interface AppState{
  change: boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}){
    super(props);
    this.state = {
      change: true
    }
  }
  clickButton = () => {
    this.setState({ change: !this.state.change})
  }

  render(){
    return (
      <>
       <h1>My App</h1>
        {this.state && <CounterManagment ownerName='Mahesh'/>}
        <button onClick={this.clickButton}>Change</button>
    </>
    )
  }
}

export default App;
