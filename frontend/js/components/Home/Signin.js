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

    RegistarUsuario(e) {

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
                    <form onSubmit={this.RegistarUsuario.bind(this)}>
                        <div class="row">
                            <div class="col m6">
                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3" >contacts</i>
                                    <input id="first_name" type="text" className="validate"></input>
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                
                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">contacts</i>
                                    <input id="lastname" name="lastname" onChange={this.obtenerCambio.bind(this)} type="text" className="validate" value={this.state.lastname}></input>
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                                

                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">account_circle</i>
                                    <input id="usernameSi" name="username" onChange={this.obtenerCambio.bind(this)} type="text" className="validate" value={this.state.username}></input>
                                    <label htmlFor="usernameSi">Username</label>
                                </div>
                               
                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">email</i>
                                    <input id="email" name="email" onChange={this.obtenerCambio.bind(this)} type="email" className="validate" value={this.state.email}></input>
                                    <label htmlFor="email">Email</label>
                                </div>


                                <div className="input-field">
                                    <i className="material-icons prefix blue-text text-accent-3">vpn_key</i>
                                    <input id="passwordSi" name="password" onChange={this.obtenerCambio.bind(this)} type="password" className="validate" value={this.state.password}></input>
                                    <label htmlFor="passwordSi">Password</label>
                                </div>
                                <br></br>

                                <input type="submit" value="Register" className="btn btn-block btn-large blue accent-3"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signin;