import React from "react";
import { Thumbnail, Button } from "react-bootstrap/lib";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import addToCart from './AddToCart'

class SaleItem extends React.Component {

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const buttonStyles = {
            "marginLeft" : "70%"
        };

        const textStyles = {
            "textAlign" : "center"
        };

        const imageStyles = {
            "marginTop" : "5%"
        };

        return (
            <Thumbnail style={imageStyles} src={"/images/" + this.props.saleName + ".jpg"} alt={this.props.saleName}>
                <h3 style={textStyles}>{this.props.saleName}</h3>
                <p style={buttonStyles}>
                <Button bsStyle="success" onClick={this.openModal}>Add to Cart</Button>
                </p>
                <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Add to Cart">
                    {/* <h2 ref={subtitle => this.subtitle = subtitle}>Add to Cart</h2>
                        <addtoCart/> */}
                    <p>quack</p>
                </Modal>
            </Thumbnail>
        );
    }
}

export default SaleItem;