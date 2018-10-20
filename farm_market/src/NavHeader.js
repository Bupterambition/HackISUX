import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap/lib";
import "./NavHeading.css"

class NavHeader extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">Farmers Market</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                   <NavItem>
                       Login
                   </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavHeader;