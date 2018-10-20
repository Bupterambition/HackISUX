import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";
import { Link } from "react-router-dom";

class SaleItem extends React.Component {
    render() {

      const buttonStyles = {
          "marginLeft" : "70%"
      }

      const textStyles = {
          "textAlign" : "center"
      }

        return (
          //TODO: pull information from database
            <Thumbnail src="https://cdn.nexternal.com/turkeyknob/images/january-pink-lady.jpg" alt="242x200">
                <h3 style={textStyles}>Apple</h3>
                <p style={textStyles}>Address:</p>
                <p style={buttonStyles}>
                <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;
