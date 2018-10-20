import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap/lib";

class NavHeader extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">Digital Harvest</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                   <NavItem>
                       Login
                   </NavItem>
                   <NavItem>
                        <span class="glyphicon glyphicon-shopping-cart"></span>
                   </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavHeader;
