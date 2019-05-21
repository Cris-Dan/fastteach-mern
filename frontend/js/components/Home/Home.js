import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
class Home extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
           
        }
    }
    componentDidMount() {
        fetch('/api/home')
            .then(res => res.text())
            .then(res => this.setState({ mensaje: res }));
    }

    obtenerCambioRegistro(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

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

    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row backgroundPropio" >
                        <div className="col-sm-6">
                            <div className="card cardPropio"
                            >
                                <div className="card-body backgroundPropio" >
                                    <h1 className=" display-3 font-weight-bold text-white text-center">Bienvenidos a TechFazt</h1>
                                    <h3 className=" text-white text-center">La plataforma que te ayudará a conocer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card w-50 card2Propio" >

                                <div className="card-body">
                                    <h2 className="text-center font-weight-bold">Aprende con nosotros</h2>
                                    <h5 className="text-center">Regístrate en pocos segundos</h5>
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="form-group formGroupPropio" >

                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                placeholder="Enter email" name="email" onChange={this.obtenerCambioRegistro.bind(this)}></input>
                                        </div>
                                        <div className="form-group formGroupPropio" >

                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.obtenerCambioRegistro.bind(this)}></input>
                                        </div>
                                        <div className="form-group formGroupPropio" >

                                            <input type="text" className="form-control" name="username" id="usernameField"
                                                placeholder="Username" onChange={this.obtenerCambioRegistro.bind(this)}></input>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark w-100"> <span
                                            className="font-weight-bold">Regístrate</span></button>
                                        <a className="btn  btn-outline-primary w-100 mt-3 " href="/#"><i className="fab fa-facebook"></i>
                                            <span className="font-weight-bold">Ingresa con Facebook</span></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="features" className="container-fluid">
                    <h2 className="text text-center font-weight-bold">Todo lo que necesitas para aprender</h2>
                    <div className="row mt-5">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-2 ">
                            <img className="d-flex justify-content-center" src="images/clock.png" width="75" height="75" alt=""></img>
                            <h5 className="font-weight-bold text text-dark d-flex justify-content-start mt-4">A la vuelta de la esquina</h5>
                            <h6 className="d-flex justify-content-start text text-black-50">Contacta a los mejores tutores que están
    dispuestos a enseñarte y cercanos a tu hogar.</h6>

                        </div>
                        <div className="col-sm-2  ">
                            <img className="d-flex justify-content-center" src="images/classroom.png" width="75" height="75" alt=""></img>
                            <h5 className="font-weight-bold text text-dark d-flex justify-content-start mt-4">Enseñanza de calidad</h5>
                            <h6 className="text text-black-50">Tutores con amplia experiencia y especializados en los cursos que dictan.</h6>

                        </div>
                        <div className="col-sm-2  ">
                            <img className="d-flex justify-content-center" src="images/exam.png" width="75" height="75" alt=""></img>
                            <h5 className="font-weight-bold text text-dark d-flex justify-content-start mt-4">Repositorio de Archivos</h5>
                            <h6 className="text text-black-50">Disfruta de nuestro banco de preguntas acorde a las necesidades que
    tengas.</h6>
                        </div>
                        <div className="col-sm-3">

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;