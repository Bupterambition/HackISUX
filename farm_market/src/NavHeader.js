import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap/lib";

class NavHeader extends React.Component {
    render() {

      const floatLeftStyles = {
          "float" : "left"
      }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand style={floatLeftStyles}>
                    <a href="#home">Farmer&#39;s Market</a>
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
