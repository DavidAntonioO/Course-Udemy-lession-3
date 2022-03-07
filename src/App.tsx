import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruits from './components/Fruits';

export const App: React.FC = () => {
  return(
    <React.Fragment>
      <h1>Welcomer</h1>
      <Fruits/>
    </React.Fragment>
  )
}

export default App;
