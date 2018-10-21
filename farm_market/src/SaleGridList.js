import React from "react";
import { Panel } from "react-bootstrap/lib";
import SaleGrid from "./SaleGrid";

class SaleGridList extends React.Component {

    constructor() {
        super();
        this.state = {
            sales: []
        }
    }

    getSales() {
        fetch("/farmers/" + this.props.location).then(results => {
            return results.json();
        }).then(data => {
            let sales = data.map(item => {
                const styles = {
                    "backgroundColor" : "#d1d1d1"
                };
        
                const panelStyles = {
                    "marginTop" : "5%"
                };

                return (
                    <Panel style={panelStyles}>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{item.name}, location: {item.location}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body style={styles}>
                            <div class="col-md-12">
                                <SaleGrid farmer={item.name} sales={item.items} />
                            </div>
                        </Panel.Body>
                    </Panel>
                );
            });
            this.setState( {sales: sales });
        });
    }

    render() {
        this.getSales();

        return this.state.sales;
    }
}

export default SaleGridList;