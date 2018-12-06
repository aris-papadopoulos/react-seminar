import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.state = {
            newNotifications: 4
        }
    }

    renderNotifications() {
        if (this.state.newNotifications > 0) {
            return <span className="new badge red">{this.state.newNotifications}</span>
        }
        else {
            return
        }
    }

    clearNotifications() {
        this.setState({
            newNotifications: 0
        });
    } 

    render() {
        return (
            <header className="App-header">
                <nav>
                    <div className="nav-wrapper blue lighten-1">
                        <div className="container">
                            <a href="/" className="brand-logo">Ferries In Greece</a>
                            <ul id="nav-mobile" className="right">
                                <li><a href="#sass">sass</a></li>
                                <li><a href="#less" onClick={this.clearNotifications}>less {this.renderNotifications()}</a></li>
                                <li><a href="#css">css</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;