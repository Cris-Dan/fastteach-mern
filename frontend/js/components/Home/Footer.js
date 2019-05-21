import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="contfot">
                        <div className="row">
                            <div className="col-md-3">
                                <ul>
                                    <li><b>¿Necesitas ayuda?</b></li>
                                    <li><a href="/ayuda/">Ayuda</a></li>
                                    <li><a href="/informacion/condicionesuso.aspx">Condiciones de uso</a></li>
                                    <li><a href="/informacion/politicadedatos.aspx">Política de privacidad</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <li><b>Usuarios registrados</b></li>
                                    <li><a href="/acceso-area-personal.aspx">Acceso profesores</a></li>
                                    <li id="lnkac3"><a href="/centros/">Acceso centros</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <li><b>Únete</b></li>
                                    <li><a href="/dar-clases-particulares/">Dar clases particulares</a></li>
                                    <li id="lnkpta3"><a href="/centros/registro/">Alta centros</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul id="menucomunity">
                                    <li><b>Comunidad</b></li>
                                    <li id="lnkblog"><a href="/blog/">Novedades y Blog</a></li>
                                    <li id="lnkqa">
                                        <a href="/questions/">Preguntas y respuestas</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="cl_b"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;