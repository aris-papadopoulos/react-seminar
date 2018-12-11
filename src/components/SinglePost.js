import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentPost } from '../actions/';

class SinglePost extends Component {

    componentDidMount() {
        // Get selected post data from Wordpress API
        this.props.getCurrentPost(this.props.match.params.slug);
    }

    // Parse HTML
    createMarkup() {
        return {__html: this.props.currentPost.content};
    }

    renderPost() {
        if (this.props.currentPost.isLoading === true) {
            // Render Preloader
            return (
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            // Render post data 
            return (
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.currentPost.imageSrc} alt={this.props.currentPost.imageAlt} />
                            <span className="card-title">{this.props.currentPost.title}</span>
                        </div>
                        <div className="content" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="App">
                <main>
                    <div className="row container">
                        {this.renderPost()}
                    </div>
                </main>
            </div>
        )
    }
}

// Dispatch action to fetch posts
function mapStateToProps(state) {
    return {
        currentPost: state.currentPost
    }
}

export default connect(mapStateToProps, { getCurrentPost })(SinglePost);