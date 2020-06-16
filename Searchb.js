import React from "react";
import {Select} from 'react-select'

class SearchBar extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({selectedOption})
        // code to make something happen after selecting an option
    };

    render() {
        return (
            <div>
                <Select
                    value={selectedOption}
                    options={searchList}
                    onChange={this.handleChange}
                    placeholder="Search..."
                    openMenuOnClick={false}
                />
            </div>
        )
    }
}