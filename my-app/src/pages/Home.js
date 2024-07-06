import React, {Component} from "react";
import CarouselBox from "../components/CarouselBox";
import { Container, Card, Button, CardGroup } from "react-bootstrap";

export default class Home extends Component {
    render () {
        return(
            <>
            <CarouselBox />

            <Container>
                <h2 className="text-center m4">Our team</h2>
                <CardGroup className="m-4">
                    <Card className="m-4" style={{ borderRadius: "10px" }}>
                        <Card.Img 
                            style={{ padding: "8px", borderRadius: "18px" }}
                            variant="top" 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Card.Body>
                            <Card.Title>Ux/Ui</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque perspiciatis laudantium!
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card className="m-4" style={{ borderRadius: "10px" }}>
                        <Card.Img 
                            style={{ padding: "8px", borderRadius: "18px" }}
                            variant="top" 
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque perspiciatis laudantium!
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card className="m-4" style={{ borderRadius: "10px" }}>
                        <Card.Img 
                            style={{ padding: "8px", borderRadius: "18px" }}
                            variant="top" 
                            src="https://images.unsplash.com/photo-1521830101529-057b1dfd9784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlc3QlMjB0ZWFtfGVufDB8fDB8fHwy"
                        />
                        <Card.Body>
                            <Card.Title>Basketball</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque perspiciatis laudantium!
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}