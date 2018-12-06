import React, { Component } from 'react';

class SinglePost extends Component {

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
    
    createMarkup() {
        return {__html: this.props.excerpt};
    }

    render() {
        return (
            <div className="App">
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
            <main>
                <div className="col s12 m6">
                    <div className="card z-depth-2">
                        <div className="card-image">
                            <img src={this.props.imageSrc} alt="mpamphs" />
                            <span className="card-title">{this.props.title}</span>
                        </div>
                        <div className="card-content" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                        <div className="card-action">
                            <a href="#mpampis" className="blue-text text-darken-2">Read more</a>
                        </div>
                    </div>
               </div>
            </main>
        </div>
        )
    }
}

export default SinglePost;