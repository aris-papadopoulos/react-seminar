import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import '../css/App.css';

import { getPosts } from '../actions/';

class App extends Component {

    componentDidMount() {
        // Get posts from Wordpress API
        this.props.getPosts();
    }

    render() {
        return (
            <div className="App">
                <main>
                    <div className="row container">
                        {this.props.posts.map(post => {
                            return <Post key={post.slug} imageSrc={post.featured_media.url} title={post.title} excerpt={post.excerpt} slug={post.slug} />
                        })}
                    </div>
                </main>
            </div>
        );
    }
}

// Get redux state for posts previews
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(App);