import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

class FarmerItem extends React.Component {
    render() {

      const buttonStyles = {
          "marginLeft" : "70%"
      }

      const textStyles = {
          "textAlign" : "center",
          "fontFamily" : "serif",
          "fontSize" : "1.5em"
      }

      return (
          //TODO: pull information from database
            <Thumbnail src="https://pbs.twimg.com/profile_images/984274513297801217/GwwvM0Ao_400x400.jpg" alt="242x200">
                <h3 style={textStyles}>Farmer Name</h3>
                <p style={textStyles}>Lives at: <a href="/">Link to Google</a></p>
                <p style={buttonStyles}>
                <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default FarmerItem;
