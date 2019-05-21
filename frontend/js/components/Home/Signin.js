import React, { Component } from 'react';

class Signin extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            usertype: '',
        }
    }

    onSubmit(e) {
        console.log(this.state);
        fetch('/api/register-alumno', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.text())
            .then(res => alert(res))
            .catch(err => {
                console.log(err);
                alert('error register');
            })
        e.preventDefault();
    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">
                            <div className="col m6">

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">account_circle</i>
                                    <input id="usernameSi" name="username" onChange={this.obtenerCambio.bind(this)} type="text" className="validate" value={this.state.username}></input>
                                    <label htmlFor="usernameSi">Nombre de usuario</label>
                                </div>

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">email</i>
                                    <input id="email" name="email" onChange={this.obtenerCambio.bind(this)} type="email" className="validate" value={this.state.email}></input>
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">contacts</i>
                                    <input id="firstname" name="firstname" onChange={this.obtenerCambio.bind(this)} type="text" className="validate" value={this.state.firstname}></input>
                                    <label htmlFor="firstname">Nombres</label>
                                </div>

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">contacts</i>
                                    <input id="lastname" name="lastname" onChange={this.obtenerCambio.bind(this)} type="text" className="validate" value={this.state.lastname}></input>
                                    <label htmlFor="lastname">Apellidos</label>
                                </div>

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">vpn_key</i>
                                    <input id="passwordSi" name="password" onChange={this.obtenerCambio.bind(this)} type="password" className="validate" value={this.state.password}></input>
                                    <label htmlFor="passwordSi">Contraseña</label>
                                </div>

                                <br></br>

                                <input type="submit" value="Registrar" className="btn btn-block btn-large blue accent-3"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signin;