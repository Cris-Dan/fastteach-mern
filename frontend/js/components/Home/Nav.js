import React, { Component } from 'react';
class Nav extends Component {
    constructor(context) {
        super(context);
        this.state = {
            email: '',
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">TechFazt</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Únete</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit.bind(this)}>
                        <input className="form-control mr-sm-2" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.obtenerCambio.bind(this)}></input>
                        <input className="form-control  mr-sm-2" type="password" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.obtenerCambio.bind(this)}></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Entrar</button>
                    </form>
                </div>
            </nav>
        )
    }
}
export default Nav;