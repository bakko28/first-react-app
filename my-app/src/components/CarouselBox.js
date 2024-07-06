import React, { Component } from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Img1 from '../assets/pic1.jpg'
import Img2 from '../assets/pic2.jpg'
import Img3 from '../assets/pic3.jpg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <CarouselItem>
                    <img 
                        className="d-block w100"
                        width= "100%" 
                        height= "843px"
                        src = { Img1}
                        alt = "Img1"
                    />
                    <Carousel.Caption>
                        <h3>Monach Image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem?</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className="d-block w100"
                        width= "100%" 
                        height= "843px"
                        src = { Img2}
                        alt = "Img2"
                    />
                    <Carousel.Caption>
                        <h3>Water Background Image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem?</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className="d-block w100"
                        width= "100%" 
                        height= "843px"
                        src = { Img3}
                        alt = "Img3"
                    />
                    <Carousel.Caption>
                        <h3>Monach 2 Image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, autem?</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        )
    }
}