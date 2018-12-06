import React, { Component } from 'react';


class Post extends Component {
    createMarkup() {
        return {__html: this.props.excerpt};
    }
    render() {
        return (
                <div className="col s12 m6">
                    <div className="card z-depth-2">
                        <div className="card-image">
                            <img src={this.props.imageSrc} alt="mpamphs" />
                            <span className="card-title">{this.props.title}</span>
                        </div>
                        <div className="card-content" dangerouslySetInnerHTML={this.createMarkup()}>
                            {/* {this.props.excerpt} */}
                        </div>
                        <div className="card-action">
                            <a href="#mpampis" className="blue-text text-darken-2">Read more</a>
                        </div>
                    </div>
               </div>
        )
    }
}

export default Post;