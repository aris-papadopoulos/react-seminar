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
                            return <Post key={post.slug} imageSrc={post.featured_media.url} title={post.title} excerpt={post.excerpt} slug={post.slug} />
                        })}
                    </div>
                </main>
            </div>
        );
    }
}

// Dispatch action to fetch posts
function mapStateToProps(state) {
    console.log(state);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts })(App);