import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="#" class="left brand-logo">ShinyOctoEmaily</a>
                <ul className="right">
                    <li><a >Login with google</a></li>
                </ul>
                </div>
             </nav>
        );
    }
}

export default Header;