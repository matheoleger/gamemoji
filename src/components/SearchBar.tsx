import React from "react";
import { ReactComponent as SearchIcon } from "../static/svg/search-icon.svg";
import "../static/css/SearchBar.css"

export const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="searchbar-left-element">
                <SearchIcon/>
                <input type="text" placeholder="Search an emoji..."></input>
            </div>
            <kbd>Ctrl + K</kbd>
        </div>
    )
}