import React from 'react';
import '../App.scss'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'
import Photo from './image/ems.jpg'
import Button from 'react-bootstrap/Button'

class Ems extends React.Component {
    render() {
        return (
            <div>
                <Container  className="DashBoard">
                    <Media>
                        <Media.Body>
                            <img
                            width={500}
                            height={300}
                            className="mr-4"
                            src={Photo}
                            alt="Generic placeholder"
                            />
                            <p className="fontSlspd">EMS SOI</p>
                            <h3>EMS SELALU DI HATI</h3>
                            <p className="fontsM-lspd">
                            Dengan slogan "EMS selalu di hati", EMS SOI adalah fraksi penentu 
                            keberlangsungan hidup warga SOI, baik dalam hal kesehatan jiwa maupun batin.
                            <br></br>
                            <br></br>
                            <Button variant="outline-dark">Dashboard LSPD</Button>
                            <Button variant="link">Pelajari</Button>
                            </p>
                        </Media.Body>
                    </Media>
                </Container>
            </div>
        );
    }
}

export default Ems