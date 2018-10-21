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
            "textAlign" : "center"
        };

        const imageStyles = {
            "marginTop" : "5%"
        };

        return (
            <Thumbnail style={imageStyles} src={"/images/" + this.props.saleName + ".jpg"} alt={this.props.saleName}>
                <h3 style={textStyles}>{this.props.saleName}</h3>
                <Button bsStyle="success" onClick={this.openModal}>View More</Button>

                <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>Modal heading</Modal.Header>
                    <Modal.Body>
                        <AddToCart farmer={this.props.farmer} name={this.props.saleName} />
                    </Modal.Body>
                </Modal>

            </Thumbnail>
        );
    }
}

export default SaleItem;