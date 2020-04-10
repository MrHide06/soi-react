import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
// import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'


const SlideChild = (props) =>{
    return (
             <CarouselItem>
                    <img
                    width={500}
                    heigth={250}
                    src={props.photo}
                    alt={props.name}
                    />
                    <CarouselCaption>
                        <h3 className="carousel">{props.name}</h3>
                        <p className="carousel">{props.desc}</p>
                    </CarouselCaption>
                </CarouselItem>
    )
}

export default SlideChild;

