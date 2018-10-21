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
            <Thumbnail style={imageStyles} src={"/images/" + this.props.saleName + ".jpg"} alt={this.props.saleName}>
                <h3 style={textStyles}>{this.props.saleName}</h3>
                <p style={buttonStyles}>
                    <Button bsStyle="success">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;