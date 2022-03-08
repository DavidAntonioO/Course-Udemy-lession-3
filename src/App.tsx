import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperComponent from './component/SuperComponent';
import { Input } from './component/input';

class App extends React.Component{

       inputRef: React.RefObject<HTMLInputElement>;

        constructor(props: {} ){
          super(props);

          this.inputRef = React.createRef();
        }

      componentDidMount(){
        console.log(this.inputRef.current);
        this.inputRef.current && this.inputRef.current.focus();
        }

        render(){
              return(
              <React.Fragment>
              <h1>Welcome</h1>
              <SuperComponent/>
              <Input ref = {this.inputRef} />
                </React.Fragment>
            )
        }

  }


export default App;
