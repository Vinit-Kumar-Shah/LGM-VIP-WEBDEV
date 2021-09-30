import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export const NavbarComp = ({onClick}) => {
    return (
        <Navbar expand="lg" bg="light" variant="light" className="py-3">
            <Container>
                <Navbar.Brand href="/#">Let's Grow More</Navbar.Brand>
                <Nav>
                    <Nav.Item> 
                        <Button variant="outline-secondary"  onClick={onClick}>GET USERS</Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
