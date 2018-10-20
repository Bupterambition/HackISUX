import React from 'react';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap/lib";

class SearchBar extends React.Component {
    render() {

        const dropDownStyles = {
          "backgroundColor" : "#d4d7db",
          "marginLeft" : "10px"
        }

        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for fruits and vegetables here..." />
                        <DropdownButton
                        style={dropDownStyles}
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
