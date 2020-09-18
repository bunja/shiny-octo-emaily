import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Header extends Component {
    renderContent(){
        switch(this.props.auth) {
            case null:
                return "loading";
            case false:
                return "NOT LOGGED IN";
            default:
                return "YOU ARE LOGGED IN";
        }
    }
    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to="#" class="left brand-logo">ShinyOctoEmaily</Link>
                <ul className="right">
                    { this.renderContent()}
                    
                </ul>
                </div>
             </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Header);