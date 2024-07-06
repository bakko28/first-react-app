import React, {Component} from "react";
import {Container, Tab, Col, Nav, Row } from "react-bootstrap";

import designPic from '../assets/designPic.jpg';
import teamPic from '../assets/teamPic.jpg';
import programmingPic from '../assets/programmingPic.jpg';
import frameworksPic from '../assets/frameworksPic.jpg';
import librariesPic from '../assets/librariesPic.jpg';

export default class About extends Component {
    render () {
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <img src={designPic} alt="" width="900px" style={{ margin: "16px" }}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse, amet dicta maxime ea architecto aperiam eveniet neque expedita quas repudiandae doloremque hic reiciendis recusandae ducimus odio optio dolores vel!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={teamPic} alt="" width="900px" style={{ margin: "16px" }}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse, amet dicta maxime ea architecto aperiam eveniet neque expedita quas repudiandae doloremque hic reiciendis recusandae ducimus odio optio dolores vel!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={programmingPic} alt="" width="900px" style={{ margin: "16px" }}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse, amet dicta maxime ea architecto aperiam eveniet neque expedita quas repudiandae doloremque hic reiciendis recusandae ducimus odio optio dolores vel!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={frameworksPic} alt="" width="900px" style={{ margin: "16px" }}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse, amet dicta maxime ea architecto aperiam eveniet neque expedita quas repudiandae doloremque hic reiciendis recusandae ducimus odio optio dolores vel!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={librariesPic} alt="" width="900px" style={{ margin: "16px" }}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse, amet dicta maxime ea architecto aperiam eveniet neque expedita quas repudiandae doloremque hic reiciendis recusandae ducimus odio optio dolores vel!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}