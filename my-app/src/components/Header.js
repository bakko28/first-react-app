import React, { Component } from "react";
import { Button, Container, Form, FormControl, NavLink, Navbar, Nav } from "react-bootstrap";
import logo from "./logo192.png"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

export default class Header extends Component {
    render() {
        return(
            <>

            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href = "/">
                        <img
                            src = {logo}
                            height = "50"
                            width = "50"
                            className = "d-inline-block align-top"
                            alt = "logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className = "me-auto">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About Us</NavLink>
                            <NavLink href="/contacts">Contacts</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type = "text"
                                placeholder = "Search"
                                className = "me-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                </Routes>
            </Router>
        </>
        )
    }
}