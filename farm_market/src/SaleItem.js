import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

class SaleItem extends React.Component {
    render() {
        return (
            <Thumbnail src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;