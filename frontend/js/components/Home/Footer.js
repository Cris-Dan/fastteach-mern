import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="my-4 footerFormat">
                <div className="container">
                    <div id="contfot">
                        <div className="row">
                            <div className="col-md-3">
                                <ul>
                                    <div className="font-weight-bold  h6">¿Necesitas ayuda?</div>
                                    <li><a href="/ayuda/">Ayuda</a></li>
                                    <li><a href="/informacion/condicionesuso.aspx">Condiciones de uso</a></li>
                                    <li><a href="/informacion/politicadedatos.aspx">Política de privacidad</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <div className="font-weight-bold  h6">Usuarios registrados</div>
                                    <li><a href="/acceso-area-personal.aspx">Acceso profesores</a></li>
                                    <li id="lnkac3"><a href="/centros/">Acceso centros</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul>
                                    <div className="font-weight-bold  h6">Únete</div>
                                    <li><a href="/dar-clases-particulares/">Dar clases particulares</a></li>
                                    <li id="lnkpta3"><a href="/centros/registro/">Alta centros</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul id="menucomunity">
                                    <div className="font-weight-bold  h6">Comunidad</div>
                                    <li id="lnkblog"><a href="/blog/">Novedades y Blog</a></li>
                                    <li id="lnkqa">
                                        <a href="/questions/">Preguntas y respuestas</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <a href="#"><i className="fa fa-facebook-official"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col text-center">
                                &copy; 2019 TechFazt Inc
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;