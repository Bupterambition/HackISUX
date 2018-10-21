import React from "react";
import SaleItem from "./SaleItem";

class SaleGrid extends React.Component {

    render() {
<<<<<<< HEAD
        let sales = this.props.sales;

        let items = sales.slice(0, Math.min(sales.length, 3));

        const panelStyles = {
            "marginTop" : "3%"
        };
=======

      const styles = {
          "backgroundColor" : "#d1d1d1",
      }

      const panelStyles = {
        "marginTop" : "3%"
  }
>>>>>>> 3c80f870e68297dad5354379a4afe50468e1381a

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
