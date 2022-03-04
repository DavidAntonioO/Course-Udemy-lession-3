import React, { ErrorInfo } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent'
import { FirstComponentProps } from './components/FirstComponent/interface';
import ErrorComponent from './components/ErrorComponent';

   interface AddProps {}

   interface AppState{
      hasError: boolean;
  }

class App extends React.Component<AddProps, AppState> {

      constructor(props: AddProps){
        super(props);

        this.state ={
            hasError: false
        }
    }

      static getDerivedStateFromError(error: Error){
        console.log('getDerivedStateFromError:', error);

        return {
            hasError: true
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo){
        console.log('componentDidCatch:', error);
        console.log('componentDidCatch:', info);

        this.setState({
          hasError: true
        })
    }
    render(){
      return (
        <>
          <h1>My App</h1>
          {this.state.hasError ? <ErrorComponent/> : <FirstComponent/>}
        </>
      )
    }
}

export default App;
