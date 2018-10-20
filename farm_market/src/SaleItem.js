import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";

class SaleItem extends React.Component {
    render() {
        return (
            <Thumbnail src="https://img1.ak.crunchyroll.com/i/spire1/91ac5d44a439598ca8f5880c0d1dd5a51471101892_large.jpg" alt="242x200">
                <h3>Apple</h3>
                <p>+ 3 health</p>
                <p>
                <Button bsStyle="primary">Buy</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default SaleItem;