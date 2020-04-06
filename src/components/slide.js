import React from 'react';

import CssBaseLine from '@material-ui/core/CssBaseline'
import SimpleImageSlider from 'react-simple-image-slider'
import photo1 from './image/thegodfather.jpg'
import photo2 from './image/generation.jpg'

class Slide extends React.Component {
    constructor(){
        super();
        this.state = {
            useGPURender: true,
            showNavs:true,
            showBullets:true,
            navStyle:1,
            slideDuration:0.5,
            bgColor: '#000000',
            slideIndexText: '',
        };
    }

    componentDidMount(){
        console.log("[Slide componentDidMount]");
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("[Slide componentDidUpdate]");
    }
    onClickNav = (toRight) =>{
        console.log(`[Slide onClickNav] ${toRight}`);
    }
    onClickBullets = (idx) => {
        console.log(`[Slide onClickBullets] ${idx}`);
    }
    onStartSlide = (idx, length) => {
        console.log(`[Slide onStartSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx}/${length}`});
    }
    onCompleteSlide = (idx, length) =>{
        console.log(`[Slide onCompleteSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx}/${length}`});
    }
    onToggleOptions = value => () =>{
        console.log(`[App onToggleOptions] ${value}`);
        const updateValue = !this.state[value];
        this.setState({ [value]: updateValue});
    }
    onChangeSelect = event => this.setState({ [event.target.name]: event.target.value});
    
    render() {
        const images = [
            { photo1 },
            { photo2 },
            { url: "images/lspd.png" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];
        
        return (
            <div style={{ textAlign: "center" }}>
                <CssBaseLine />
                <SimpleImageSlider
                        style={{ margin: "0 auto", marginTop: "50px" }}
                        width={500}
                        height={300}
                        images={images}
                        showBullets={this.state.showBullets}
                        showNavs={this.state.showNavs}
                        useGPURender={this.state.useGPURender}
                        navStyle={this.state.navStyle}
                        slideDuration={this.state.slideDuration}
                        onClickNav={this.onClickNav}
                        onClickBullets={this.onClickBullets}
                        onStartSlide={this.onStartSlide}
                        onCompleteSlide={this.onCompleteSlide}
                    />
            </div>
        );
    }
}

export default Slide