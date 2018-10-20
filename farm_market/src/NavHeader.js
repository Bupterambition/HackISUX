import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap/lib";
import { Link } from "react-router-dom";

class NavHeader extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link to="/">Farmer&#39;s Market</Link>
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
