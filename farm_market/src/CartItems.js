import React from 'react';
import { Thumbnail, Button } from "react-bootstrap/lib";
import QuantityInput from './QuantityInput';

class AddToCart extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          farmer: "",
          item: "",
          quantity: ""
        };
      }

      getItem() {
        console.log("/item/" + this.props.name);
        fetch("/item/" + this.props.name).then(data => {
          return data.json();
        }).then(res => {
          console.log(res);
          let item = res.filter(i => i.farmer === this.props.farmer &&
             i.name === this.props.name)[0];
          this.setState(
            {
              farmer: item.farmer,
              item: item.name,
              quantity: item.quantity
            });
          });
      }

      render() {
        const styles = {
          "marginLeft" : "40%",
          "marginRight" : "40%",
          "height" : "10%",
          "width" : "20%",
          "paddingTop" : "10px",
          "marginTop" : "7%"
        };

        const textStyles = {
          "textAlign" : "center"
        };

        const buttonStyles = {
            "marginLeft" : "35%"
        };

        this.getItem();
        console.log("props");
        console.log(this.props);
        console.log("state");
        console.log(this.state);

        return (
            <Thumbnail src={"/images/" + this.state.item + ".jpg"} alt={this.state.item} style={styles}>
                <h3 style={textStyles}>{this.state.farmer + "'s " + this.state.item}</h3>
                  <p>Quantity: <QuantityInput /> out of {this.state.quantity} {this.state.item} available</p>
                  <p style={textStyles}>Address:</p>
                <p style={buttonStyles}>
                <Button bsStyle="success">Add to Cart</Button>
                </p>
            </Thumbnail>
        );
      }
  }

export default AddToCart;
