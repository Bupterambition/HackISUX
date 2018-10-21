import React from 'react';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from "react-bootstrap/lib";

class SearchBar extends React.Component {

    render() {
        const dropDownStyles = {
          "backgroundColor" : "#d1d1d1",
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
                            title="Location"
                            onSelect={this.props.onLocationChange}>
                            <MenuItem eventKey="1">Ames</MenuItem>
                            <MenuItem eventKey="2">Omaha</MenuItem>
                            <MenuItem eventKey="3">Iowa City</MenuItem>
                            <MenuItem eventKey="4">All</MenuItem>
                        </DropdownButton>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default SearchBar;
