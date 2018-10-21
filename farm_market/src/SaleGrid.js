import React from "react";
import SaleItem from "./SaleItem";

class SaleGrid extends React.Component {

    render() {
        let sales = this.props.sales;

        let items = sales.slice(0, Math.min(sales.length, 3));

        const panelStyles = {
            "marginTop" : "3%"
        };

        return items.map(item => {
            return (
                <div style={panelStyles} class="col-md-4">
                    <SaleItem saleName={item}/>
                </div>
            );
        });
    }
}

export default SaleGrid;
