import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import '../css/App.css';

import { getPosts } from '../actions/';

class App extends Component {
    constructor(props) {
        super(props);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.state = {
            newNotifications: 4
        }
    }

    componentDidMount() {
        this.props.getPosts();
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
                <div className="row container">
                    {this.props.posts.map(post => {
                        return <Post imageSrc={post.featured_media.url} title={post.title} excerpt={post.excerpt} />
                    })}
                </div>
            </main>
        </div>
        );
    }
}

// Dispatch action to fetch posts
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(App);