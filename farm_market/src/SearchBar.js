import React from 'react';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap/lib";

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
                            title="Location">
                            <MenuItem key="1">Iowa City</MenuItem>
                            <MenuItem key="2">Omaha</MenuItem>
                            <MenuItem key="3">All</MenuItem>
                        </DropdownButton>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default SearchBar;