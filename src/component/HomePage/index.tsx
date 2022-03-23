import React from 'react';
import Profile from '../Profile';
import ReactDom from 'react-dom';

class HomePage extends React.Component{
    profileRef: React.RefObject<Profile> = React.createRef();

    componentDidMount(){
        console.log(ReactDom.findDOMNode(this.profileRef.current));
    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Profile ref={this.profileRef} />
            </div>
        )
    }
};

export default HomePage;