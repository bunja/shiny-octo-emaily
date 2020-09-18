import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to="#" class="left brand-logo">ShinyOctoEmaily</Link>
                <ul className="right">
                    <li><Link to="#">Login with google</Link></li>
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