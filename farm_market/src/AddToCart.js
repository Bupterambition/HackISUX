import React from 'react';
import { Thumbnail, Button } from "react-bootstrap/lib";
import QuantityInput from './QuantityInput';

class AddToCart extends React.Component {

      render() {

        const styles = {
          "marginLeft" : "40%",
          "marginRight" : "40%",
          "height" : "10%",
          "width" : "20%",
          "paddingTop" : "10px",
          "marginTop" : "7%"
        }

        const textStyles = {
          "textAlign" : "center"
        }

        const buttonStyles = {
            "marginLeft" : "35%"
        }

        //TODO: pull information from database
        return (
          <div>
            <Thumbnail src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200" style={styles}>
                <h3 style={textStyles}>Farmer Joe&#39;s Apples</h3>
                  <p>Quantity: <QuantityInput /> out of 500 apples available</p>
                  <p style={textStyles}>Address:</p>
                <p style={buttonStyles}>
                <Button bsStyle="success">Add to Cart</Button>
                </p>
            </Thumbnail>
          </div>
        );
      }
  }

export default AddToCart;
