import React, { Component } from 'react';
import Nav from './Nav';
class Home extends Component {
    constructor() {
        super();
        
        this.state = {
            mensaje: 'Loading...'
        }
    }
    componentDidMount() {
        fetch('/api/home')
            .then(res => res.text())
            .then(res => this.setState({ mensaje: res }));
    }
    render() {
        return (
            <div>
                <Nav />
                <div >
                    <div className="section">
                        <div className="row section1 center">
                            <h1>FazTeach</h1>
                            <h4 className="title-banner">Encuentra el profesor particular mas cerca de ti</h4>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row  section2">
                            <div className="col s12 ">
                                <h4 className = "center-align">Encuentra y contacta gratis con profesores particulares</h4>
                                <h6 className = "center-align">Descubre como utilizar FazTeach para encontrar tu profesor particular ideal </h6>
                                <div className = "home_3block mg60">
                                    <div className = "opis steps cgris center-align" >
                                        <div className = "op">
                                            <i className = "sprite-h2"></i>
                                            <p className ="fs16 bold">Explora</p>
                                            <p>Somos el mayor portal de profesores del Perú</p>
                                        </div>
                                        <div className = "op">
                                            <i className = "sprite-h2 b"></i>
                                            <p className ="fs16 bold">Escoge</p>
                                            <p>Selecciona tu profesor perfecto según tus necesidades, su experiencia, precio...</p>
                                        </div>
                                        <div className ="op">
                                            <i className = "sprite-h2 c"></i>
                                            <p className ="fs16 bold">Aprende</p>
                                            <p>Con clases particulares aprendes más rápido, ya que son totalmente personalizadas</p>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row  section2">
                            <div className="col s12 ">
                                <h4 className = "center-align">Clases particulares y profesores de apoyo por temática</h4>
                                <h6 className = "center-align">Contamos con profesores de cientos de asignaturas, idiomas, disciplinas, especialidades técnicas, artísticas... y por supuesto a tu nivel</h6>
                                <div className = "home_3block mg60">
                                    <div className = "opis steps cgris center-align" >
                                        <div className = "op">
                                            <i className = "sprite-h2"></i>
                                            <p className ="fs16 bold">Explora</p>
                                            <p>Somos el mayor portal de profesores del Perú</p>
                                        </div>
                                        <div className = "op">
                                            <i className = "sprite-h2 b"></i>
                                            <p className ="fs16 bold">Explora</p>
                                            <p>Somos el mayor portal de profesores del Perú</p>
                                        </div>
                                        <div className ="op">
                                            <i className = "sprite-h2 c"></i>
                                            <p className ="fs16 bold">Explora</p>
                                            <p>Somos el mayor portal de profesores del Perú</p>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;