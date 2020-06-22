import React, { Component }  from 'react';
import {Link} from 'react-router-dom';

class MenuItem extends Component {
    render(){
        return (
            <Link to={this.props.loc}><div className="buttonMenu" id={"menu-"+this.props.id}>{this.props.text}</div></Link>
        );
    };
}

export default MenuItem;
