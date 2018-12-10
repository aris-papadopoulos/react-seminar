import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentPost } from '../actions/';

class SinglePost extends Component {

    constructor(props) {
        super(props);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.state = {
            newNotifications: 4
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.getCurrentPost(this.props.match.params.slug);
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
        return {__html: this.props.currentPost.content};
    }

    render() {
        return (
            <div className="App">
                <main>
                    <div className="row container">
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
                    </div>
                </main>
            </div>
        )
    }
}

// Dispatch action to fetch posts
function mapStateToProps(state) {
    console.log('app state', state);
    return {
        currentPost: state.currentPost
    }
}

export default connect(mapStateToProps, { getCurrentPost })(SinglePost);