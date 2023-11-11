import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../static/svg/search-icon.svg";
import "../static/css/SearchBar.css";

type Props = {
  onFilter: Function;
}

export const SearchBar = (props: Props) => {

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      const searchbarInput = document.getElementById("input-searchbar");
      searchbarInput?.focus();
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

  const onChangeSearchbarHandler = (event: any) => {
    props.onFilter(event.currentTarget.value)
  }

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
          onChange={onChangeSearchbarHandler}
        ></input>
      </div>
      <kbd>Ctrl + K</kbd>
    </div>
  );
};
