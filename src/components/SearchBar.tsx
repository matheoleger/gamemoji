import React, { useEffect } from "react";
import { ReactComponent as SearchIcon } from "../static/svg/search-icon.svg";
import "../static/css/SearchBar.css";

export const SearchBar = () => {
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      const searchbarInput = document.getElementById("input-searchbar");
      searchbarInput?.focus();
      // document
      //   .getElementsByClassName("searchbar")
      //   .item(0)
      //   ?.classList.add("searchbar-focus");
    }
  };

  const focusHandler = (event: any) => {
    const searchbar = document.getElementsByClassName("searchbar").item(0);

    searchbar?.classList.add("searchbar-focus");
  };

  const focusOutHandler = (event: any) => {
    const searchbar = document.getElementsByClassName("searchbar").item(0);

    searchbar?.classList.remove("searchbar-focus");
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });

  return (
    <div className="searchbar">
      <div className="searchbar-left-element">
        <SearchIcon />
        <input
          id="input-searchbar"
          type="text"
          placeholder="Search an emoji..."
          onFocus={focusHandler}
          onBlur={focusOutHandler}
        ></input>
      </div>
      <kbd>Ctrl + K</kbd>
    </div>
  );
};
