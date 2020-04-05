import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import photo1 from './image/thegodfather.jpg'
import photo2 from './image/generation.jpg'
import photo3 from './image/oldcartel.jpg'

class Slide extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
            <h1>Gallery</h1>
                <Carousel>
                <CarouselItem>
                    <img
                    src={photo1}
                    alt="First slide"
                    height="334px"
                    />
                    <CarouselCaption>
                        <h3 className="carousel">The God Father</h3>
                        <p className="carousel">The God Father Cartel a.k.a Mr.O</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                    src={photo2}
                    alt="Third slide"
                    height="334px"
                    />
                    <CarouselCaption>
                        <h3 className="carousel">ReGeneration Cartel and Mafia</h3>
                        <p className="carousel">"Setiap masa ada orangnya dan setiap orang ada masanya... biarkan mereka datang sebagai Raja dan pergi sebagai Legenda"~</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                    src={photo3}
                    alt="Third slide"
                    height="334px"
                    />
                    <CarouselCaption>
                        <h3 className="carousel">Old Cartel</h3>
                        <p className="carousel">"Legends never Die"~</p>
                    </CarouselCaption>
                </CarouselItem>
                </Carousel>
            </div>
        );
    }
}

export default Slide