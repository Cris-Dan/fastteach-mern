import React, { Component } from 'react';
import InicioSesion from './InicioSesion';
class Nav extends Component {
    render() {
        return (
            <nav className="navPropio">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo"><img id="logo" src="https://scontent.flim1-1.fna.fbcdn.net/v/t1.15752-9/56757278_671439923287357_3826859536258433024_n.png?_nc_cat=101&_nc_ht=scontent.flim1-1.fna&oh=16528b49194fc0eca72a24963e64bcc8&oe=5D4ED79A" alt="Faztteach" /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#modal" className="modal-trigger"><b>Registrate</b></a></li>
                        <li><a href="#modal" className="modal-trigger"><b>Iniciar Sesion</b></a></li>

                        <InicioSesion />
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;