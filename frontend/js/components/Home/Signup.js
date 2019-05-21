import React, { Component } from 'react';
import { browserHistory } from 'react-router';
class Signup extends Component {

    constructor(context) {
        super(context);
        this.state = {
            username: '',
            password: ''
        }
    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit(e) {

        fetch('/api/login-alumno', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.status === 200) {
                //browserHistory.push('/dashboard');
                alert('conseguido');
            }
        }).catch(err => {
            console.log(err);
            alert('error login');
        })
        e.preventDefault();
    }

    render() {
        return (
            <div id="modal" className="modal">
                <div className="modal-content">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-field">
                            <i className="material-icons prefix  blue-text text-accent-3">account_circle</i>
                            <input type="text" id="username" name="username" value={this.state.username} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="username">Nombre de usuario</label>
                        </div>
                        <br></br>
                        <div className="input-field">
                            <i className="material-icons prefix  blue-text text-accent-3">lock</i>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <br></br>
                        <input type="submit" value="Ingresar" className="btn btn-large blue accent-3"></input>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signup;