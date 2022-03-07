import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrackClick from './components/TrackClick';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

export const App: React.FC = () => {
  return (
    <React.Fragment>
        <h1>Welcome my App</h1>
       <Profile ownerName='Mahesh'/>
       <NewsFeed/>
    </React.Fragment>
  )

}

export default App;
