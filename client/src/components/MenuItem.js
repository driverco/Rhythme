import React, { Component }  from 'react';

class MenuItem extends Component {
    render(){
        return (
            <div className="buttonMenu" id={"menu-"+this.props.id}>{this.props.text}</div>
        );
    };
}

export default MenuItem;
