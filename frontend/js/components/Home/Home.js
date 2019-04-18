import React, { Component } from 'react';
import Nav from './Nav';
class Home extends Component {
    constructor() {
        super();
        
        this.state = {
            message: 'Loading...'
        }
    }
    componentDidMount() {
        //GET mensanje usando fetch api
        fetch('/api/home')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }
    render() {
        return (
            <div>
                <Nav />
                <div >
                    <div className="section">
                        <div className="row section1 center">
                            <h1>FazTeach</h1>
                            <h4>Encuentra el profesor particular mas cerca de ti</h4>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row  section2">
                            <div className="col s12 ">
                                <h2>Lo que iba aca</h2>
                                <p>{this.state.message} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;