import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

class SaleItem extends React.Component {

    render() {
        const buttonStyles = {
            "marginLeft" : "70%"
        };

        const textStyles = {
            "textAlign" : "center"
        };


        const imageStyles = {
            "marginTop" : "5%"
        };

        return (
            <Thumbnail style={imageStyles} src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200">
                <h3 style={textStyles}>{this.props.saleName}</h3>
                <p style={buttonStyles}>
                    <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;