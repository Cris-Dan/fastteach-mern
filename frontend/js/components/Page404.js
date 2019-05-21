import React, { Component } from 'react';
import Nav from './Home/Nav';
import Footer from './Home/Footer';
class Page404 extends Component {

    render() {
      
        return (
           
            <div className="Page404" >
                <Nav />
                <body>  
                    <center>
                        <br></br>
                        <br></br>
                        <br></br>

                        <img src="https://media.giphy.com/media/Vg0RJZdxlAozNsspbu/giphy.gif"  alt="Faztteach" width = '500px'/>

                        <br></br>
                        <br></br>
                        <h3 id='visor_imagenes'>Página no encontrada</h3>
                        <br></br>
                        <h4 id='visor_imagenes'>Esta página no existe o no está disponible en estos momentos</h4>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </center>
                </body>
                <Footer />
            </div>
            
        );
    }
}

export default Page404;