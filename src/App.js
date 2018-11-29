import React, { Component } from 'react';
import Post from './components/Post';
import './App.css';

class App extends Component {
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
                    <Post imageSrc="https://blog.ferriesingreece.com/wp-content/uploads/2018/10/kamares-sifnos-900x600.jpg" title="11+1 reasons why travelers love Sifnos Greece (and you will, too)" excerpt="So you’re planning your next holidays to Sifnos Greece? Have you already been to Sifnos? You’ve never heard of it? (This is too bad, btw) Whatever your answer might be, you happen to be in the right place, reading the right article! Why? Cause we’re gonna let you in on every secret of this amazing […]" />
                    <Post imageSrc="https://blog.ferriesingreece.com/wp-content/uploads/2018/09/oia-santorini-1-900x600.jpg" title="What’s your Greek island perfect match? – Fun Quiz" excerpt="It may be hard to find your perfect match in real life, but it’s the easiest thing to find your perfect Greek island match! Take this fun quiz and let your answers decide where your next holidays in Greece will be. Ready?" />
                    <Post imageSrc="https://blog.ferriesingreece.com/wp-content/uploads/2014/12/ios-chora-900x600.jpg" title="Ios Greece for dummies: Is it worth the hype?" excerpt="Let us guess what the one thing you already know about Ios Greece is. Probably that it is the ultimate party island, full of young people drinking and dancing the night out, right? Well, this is half the truth. You see, strange as it may seem, Ios happens to be a great place to unwind, […]" />
                    <Post imageSrc="https://blog.ferriesingreece.com/wp-content/uploads/2014/09/naxos-town-900x600.jpg" title="Why is Naxos so famous?" excerpt="What if you could lay under the sun, at an exotic beach, surrounded by lush Cycladic nature? Well, that’s what you get in Naxos. Along with many other (amazing) things that make the island so famous! Truth is you can expect nothing less from the biggest and greenest island of Cyclades island complex. Full of […]" />
                </div>
            </main>
        </div>
        );
    }
}

export default App;
