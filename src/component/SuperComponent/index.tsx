import React from 'react';

class SuperComponent extends React.Component{

    printSuperComponent = () => {
        alert('Super Component');
    }

    render(){
        return(
            <div>
                <h2>Super Component</h2>
            </div>
        )
    }
}

export default SuperComponent;