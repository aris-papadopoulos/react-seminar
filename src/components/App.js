import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import '../css/App.css';

import { getPosts } from '../actions/';

class App extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div className="App">
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