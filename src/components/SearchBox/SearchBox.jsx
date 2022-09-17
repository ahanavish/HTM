import React from "react";
import './SearchBox.css';
const SearchBox = ({ OnInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => OnInputChange(event.target.value)}
                placeholder="Type keywords"
                className="search-input" />
        </div>
    );
};

export default SearchBox;