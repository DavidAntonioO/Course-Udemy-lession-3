import React from 'react';

class SecondComponent extends React.Component{
    render(){
        throw new Error("planned Error");
        return(
            <React.Fragment>
                <h1>Second Component</h1>
            </React.Fragment>
        )
    }
}

export default SecondComponent;