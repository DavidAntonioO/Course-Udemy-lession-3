import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
function App() {
  return (
    <>
       <h1>My App</h1>
       <Button type='primary'>Test</Button>
       <Button>Primary</Button>
    </>
  );
}

export default App;
