import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

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
            <Thumbnail src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200">
                <h3 style={textStyles}>Apple</h3>
                <p style={textStyles}>Address: <a href="">Link to Google</a></p>
                <p style={buttonStyles}>
                <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;
