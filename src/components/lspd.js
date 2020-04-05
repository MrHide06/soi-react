import React from 'react';
import '../App.scss'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'
import Photo from './image/lspd.png'
import Button from 'react-bootstrap/Button'

class Lspd extends React.Component {
    render() {
        return (
            <div>
                <Container  className="DashBoard">
                    <Media>
                        <Media.Body>
                        <img
                            width={500}
                            height={300}
                            className="mr-3"
                            src={Photo}
                            alt="Generic placeholder"
                        />
                        
                            <p className="fontSlspd">LSPD SOI</p>
                            <h3>PENEGAK HUKUM SOI</h3>
                            <p className="fontsM-lspd">
                            Fraksi penegak hukum yang telah ditetapkan oleh SOI, 
                            menjaga keamanan kota dari ancaman internal maupun eksternal.
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

export default Lspd;