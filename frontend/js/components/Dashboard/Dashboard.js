import React, { Component } from 'react';



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Loading...'
        }
    }
    componentDidMount() {
        fetch('/api/secret-alumno')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }
    render() {
        return (
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Dashboard;