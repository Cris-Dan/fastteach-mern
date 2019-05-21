import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div class="shell">
                    <div id="contfot">
                        <div class="fl_l fi">
                            <ul>
                                <li><b>¿Necesitas ayuda?</b></li>
                                <li><a href="/ayuda/">Ayuda</a></li>
                                <li><a href="/informacion/condicionesuso.aspx">Condiciones de uso</a></li>                         
                                <li><a href="/informacion/politicadedatos.aspx">Política de privacidad</a></li>                         
                            </ul>
                            <ul>
                                <li><b>Usuarios registrados</b></li>
                                <li><a href="/acceso-area-personal.aspx">Acceso profesores</a></li>
                                <li id="lnkac3"><a href="/centros/">Acceso centros</a></li>                
                            </ul>
                            <ul>
                                <li><b>Únete</b></li>
                                <li><a href="/dar-clases-particulares/">Dar clases particulares</a></li>
                                <li id="lnkpta3"><a href="/centros/registro/">Alta centros</a></li>
                            </ul>
    	                    <ul id="menucomunity">        
                                <li><b>Comunidad</b></li>
                                <li id="lnkblog"><a href="/blog/">Novedades y Blog</a></li>   
                                <li id="lnkqa">                                        
                                    <a href="/questions/">Preguntas y respuestas</a>
                                </li>
                            </ul>
                            <ul id="ulcorp">
                                <li><b>Corporativo</b></li>
                                <li><a href="https://www.classgap.com/es" target="_blank">Classgap</a></li>                                             
                            </ul>
                        </div>
                        <div class="cl_b"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;