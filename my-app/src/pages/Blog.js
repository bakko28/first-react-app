import React, {Component} from "react";
import { Container, Row, Col, Card, ListGroup} from "react-bootstrap";
import htmlImg from '../assets/htmlImg.png';
import cssImg from '../assets/cssImg.png';
import jsImg from '../assets/jsImg.png';
import bootstrapImg from '../assets/bootstrapImg.png';

export default class Blog extends Component {
    render () {
        return(
            <>
                <Container>
                    <Row>
                        <Col md="9"> 
                            <div class="d-flex m-5 align-items-center">
                                <div class="flex-shrink-0">
                                    <img 
                                        width={150}
                                        height={150}
                                        src={htmlImg} 
                                        alt="#"
                                    />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>#1 Html</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati enim a pariatur eum doloremque excepturi. Mollitia libero, eius recusandae perspiciatis totam deserunt tenetur saepe neque commodi, iure quis cum accusamus.</p>
                                </div>
                            </div>
                            <div class="d-flex m-5 align-items-center">
                                <div class="flex-shrink-0">
                                    <img 
                                        width={150}
                                        height={150}
                                        src={cssImg} 
                                        alt="#"
                                    />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>#2 Css</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati enim a pariatur eum doloremque excepturi. Mollitia libero, eius recusandae perspiciatis totam deserunt tenetur saepe neque commodi, iure quis cum accusamus.</p>
                                </div>
                            </div>
                            <div class="d-flex m-5 align-items-center">
                                <div class="flex-shrink-0">
                                    <img 
                                        width={150}
                                        height={150}
                                        src={jsImg} 
                                        alt="#"
                                    />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>#3 JavaScript</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati enim a pariatur eum doloremque excepturi. Mollitia libero, eius recusandae perspiciatis totam deserunt tenetur saepe neque commodi, iure quis cum accusamus.</p>
                                </div>
                            </div>
                            <div class="d-flex m-5 align-items-center">
                                <div class="flex-shrink-0">
                                    <img 
                                        width={150}
                                        height={150}
                                        src={bootstrapImg} 
                                        alt="#"
                                    />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>#4 Bootstrap</h5>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati enim a pariatur eum doloremque excepturi. Mollitia libero, eius recusandae perspiciatis totam deserunt tenetur saepe neque commodi, iure quis cum accusamus.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <h5 className="text-center mt-5">Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Html/Css</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C#/C++</ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <Card className="mt-3" bg="light">
                                <Card.Body>
                                    <Card.Title>Side widget</Card.Title>
                                    <Card.Text>Mollitia libero, eius recusandae perspiciatis totam deserunt tenetur saepe neque commodi, iure quis cum accusamus.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}