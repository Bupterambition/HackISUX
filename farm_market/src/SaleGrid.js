import React from "react";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SaleItem from "./SaleItem";

class SaleGrid extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <SaleItem />
                    </Col>
                    <Col md={4}>
                        <SaleItem />
                    </Col>
                    <Col md={4}>
                        <SaleItem />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SaleGrid;