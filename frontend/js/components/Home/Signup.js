import React, { Component } from 'react';

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    ComprobarUsuario(e) {

    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="modal" className="modal">
                <div className="modal-content">
                    <form onSubmit={this.ComprobarUsuario.bind(this)}>
                        <div className="input-field">
                            <i className="material-icons prefix teal-text text-darken-2">person</i>
                            <input type="text" id="username" name="username" value={this.state.username} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="username">Username</label>
                        </div>
                        <br></br>
                        <div className="input-field">
                            <i className="material-icons prefix teal-text text-darken-2">lock</i>
                            <input type="text" id="password" name="password" value={this.state.password} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="password">Password</label>
                        </div>
                        <br></br>
                        <input type="submit" value="Login" className="btn btn-large"></input>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signup;