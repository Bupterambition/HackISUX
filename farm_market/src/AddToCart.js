import React from 'react';
import { Thumbnail, Button } from "react-bootstrap/lib";

class AddToCart extends React.Component {

      render() {

        const textStyles = {
          "textAlign" : "center"
        }

        const buttonStyles = {
            "marginLeft" : "80%"
        }

        const h3Styles = {
          "textAlign" : "right",
          "marginRight" : "10%",
          "positionTop" : "10px"
        }

        //TODO: pull information from database
        return (
          <Thumbnail src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200" align="left">
              <h3 style={h3Styles}>Farmer Joe&#39;s Apples</h3>
              <div>
                <p>
                  This is some pretty great apples right here.
                  You should get some&#46; They&#39;re farm fresh yo.
                  Get them while they last.
                </p>
                <p>Quantity: 500 apples</p>
                <p>Address: <a href="/">Link to Google</a></p>
              </div>
              <p style={buttonStyles}>
              <Button bsStyle="success">Add to Cart</Button>
              </p>
          </Thumbnail>
        );
      }
  }

export default AddToCart;
