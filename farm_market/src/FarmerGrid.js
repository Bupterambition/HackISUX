import React from "react";
import { Panel } from "react-bootstrap/lib";
import FarmerItem from "./FarmerItem";

class FarmerGrid extends React.Component {

    render() {

      const styles = {
          "backgroundColor" : "#d1d1d1"
      }

      const panelStyles = {
        "marginTop" : "3%",
        "marginRight" : "15%",
        "marginLeft" : "15%",
        "textAlign" : "center"
  }

        return (
            <Panel style={panelStyles}>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Farmers</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={styles}>
                <div class="col-md-12">
                <div class="col-md-4">
                        <FarmerItem />
                    </div>
                    <div class="col-md-4">
                        <FarmerItem />
                    </div>
                    <div class="col-md-4">
                        <FarmerItem />
                    </div>
                </div>
                </Panel.Body>
            </Panel>
        )
    }
}

export default FarmerGrid;
