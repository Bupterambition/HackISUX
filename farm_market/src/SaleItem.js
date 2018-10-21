import React from "react";
import { Thumbnail, Button, Modal } from "react-bootstrap/lib";
import AddToCart from "./AddToCart";

class SaleItem extends React.Component {

    constructor() {
        super();

        this.state = {
          modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const textStyles = {
            "textAlign" : "center",
        };

        const imageStyles = {
            "marginTop" : "5%",
        };

        const buttonStyles = {
            "marginLeft" : "23%",
        };

        const styles = {
            "backgroundColor" : "#d1d1d1",
        };

        const formStyles = {
              "marginRight" : "5000%",
              "marginLeft" : "0px",
        };

        return (
            <Thumbnail style={imageStyles} src={"/images/" + this.props.saleName + ".jpg"} alt={this.props.saleName}>
                <h3 style={textStyles}>{this.props.saleName}</h3>
                <Button style={buttonStyles} bsStyle="success" onClick={this.openModal}>View More</Button>

                <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body  style={styles}>
                        <AddToCart style={formStyles} farmer={this.props.farmer} name={this.props.saleName} />
                    </Modal.Body>
                </Modal>

            </Thumbnail>
        );
    }
}

export default SaleItem;
