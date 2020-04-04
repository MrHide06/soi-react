import React from 'react';

import Container from 'react-bootstrap/Container'

import '../App.scss'
import Col from 'react-bootstrap/Col'
import Photo from './image/soi.png'
import Button from 'react-bootstrap/Button'

class Body extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Container clasName="container">
                        <Col md={12}>
                            <img 
                            src={Photo}
                                alt="Generic placeholder"
                            />
                            <h2>Selamat Datang</h2>
                            <h1>State of Indonesia - Roleplay</h1>
                            <h2>Ini adalah web mirror dari website resmi nya</h2>
                            <br></br>
                            <Button variant="secondary">Mulai Petualangan</Button>{' '}
                        </Col>
                </Container>
            </div>
        );
    }
}

export default Body;