import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

class FarmerItem extends React.Component {
    render() {

      const buttonStyles = {
          "textAlign" : "center"
      }

      const textStyles = {
          "textAlign" : "center",
          "fontFamily" : "serif",
          "fontSize" : "1.5em"
      }

      return (
          //TODO: pull information from database
            <Thumbnail src="https://pbs.twimg.com/profile_images/984274513297801217/GwwvM0Ao_400x400.jpg" alt="242x200">
<<<<<<< HEAD
                <h3 style={textStyles}><strong>Farmer Name</strong></h3>
                <p style={textStyles}>In stock: <em>food items</em></p>
                <p>Produce available at: <a href="">Link to Google</a></p>

=======
                <h3 style={textStyles}>Farmer Name</h3>
                <p style={textStyles}>Lives at: <a href="/">Link to Google</a></p>
>>>>>>> 63c106795a0a0dc4f631e84a3f10f7ad63213de0
                <p style={buttonStyles}>
                <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default FarmerItem;
