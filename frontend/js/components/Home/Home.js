import React, { Component } from 'react';
import Nav from './Nav';
class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div >
                    <div className="section">
                        <div className="row section1 center">
                            <h1>FazTeach</h1>
                            <h4>Encuentra el profesor particular mas cerca de ti</h4>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row  section2">
                            <div className="col s12 ">
                                <h2>Lo que iba aca</h2>
                                <p>Maecenas et ante purus. Mauris venenatis mi non massa semper, sit amet iaculis libero cursus. Praesent dui elit, blandit in arcu a, fermentum dignissim augue. Nunc sit amet ligula accumsan, posuere est ut, bibendum leo. Aliquam molestie finibus nulla, vitae blandit velit. Donec placerat augue ut augue sagittis convallis. Suspendisse potenti. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;