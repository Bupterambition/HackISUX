import React from 'react';
import { FormGroup, InputGroup, FormControl, DropdownButton } from "react-bootstrap/lib";

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" />
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title="Action">
                            Location
                        </DropdownButton> 
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default SearchBar;