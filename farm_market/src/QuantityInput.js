import React from 'react';
import { FormGroup, InputGroup, FormControl } from "react-bootstrap/lib";

class QuantityInput extends React.Component {
    render() {

      const styles = {
        "width" : "50px",
        "textAlign" : "center"
      }

        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl style={styles} type="text" placeholder="10" />
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default QuantityInput;
