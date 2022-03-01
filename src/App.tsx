import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagment from './components/CounterManagment';

function App() {
  return (
    <>
       <h1>My App</h1>
      <CounterManagment ownerName='Mahesh'/>
    </>
  );
}

export default App;
