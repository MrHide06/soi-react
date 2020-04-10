import React from 'react'
import SlideChild from './slideChild'
import Carousel from 'react-bootstrap/Carousel'
// import foto1 from ''
// import foto2 from './image/generation.jpg'

const Slide = (props) =>{
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Gallery</h1>
            <Carousel>
                <SlideChild photo='./image/thegodfather.jpg' name="The God Father" desc="The God Father a.k.a Mr.O" />
                <SlideChild photo='./image/generation.jpg' name="Regeneration" desc="Setiap masa ada orangnya dan setiap orang ada masanya... 
                biarkan mereka datang sebagai Raja dan pergi sebagai Legenda~" />
                <SlideChild photo='./image/oldcartel.jpg' name="The OLD CARTEL" desc="Legends never DIE ~" />
            </Carousel>
        </div>
    )
}

export default Slide;