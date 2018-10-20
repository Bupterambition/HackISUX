import React from "react";
import { Panel } from "react-bootstrap/lib";
import SaleItem from "./SaleItem";

class SaleGrid extends React.Component {

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Farmer Joe</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <div class="col-md-12">
                <div class="col-md-4">
                        <SaleItem />
                    </div>
                    <div class="col-md-4">
                        <SaleItem />
                    </div>
                    <div class="col-md-4">
                        <SaleItem />
                    </div>
                </div>
                </Panel.Body>
            </Panel>
        )
    }
}

export default SaleGrid;