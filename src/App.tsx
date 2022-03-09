import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home';
import { MyContext, MyContextProvider } from './Context/MyContext';

function App(){
  return (
      <MyContextProvider>
           <HomePage/>
        </MyContextProvider>
     
  )
}

export default App;
