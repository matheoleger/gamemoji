import React, { CSSProperties, useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";
import { Popup } from "./components/Popup";
import { sleep } from "./utils";
import { ChangeThemeButton } from "./components/ChangeThemeButton";
import { OptionsButton } from "./components/OptionsButton";
import { OptionsMenu } from "./components/OptionsMenu";

function App() {
  const [filter, setFilter] = useState("");
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyHandler = (copiedText: string) => {
    setPopupIsOpen(true);
    setCopiedText(copiedText);
    sleep(3000).then(() => setPopupIsOpen(false)); //change duration in the css
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("THEME") ?? "light-theme"
  );

  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState(localStorage.getItem("HEADER_COLOR") ?? "#FFA3F6");

  const changeTheme = (newThemeValue: string) => {
    setTheme(newThemeValue);
    localStorage.setItem("THEME", newThemeValue);
  };

  return (
    <div className={`App ${theme}`}>
      <Header backgroundColor={headerColor}/>
      <div
        style={buttonsContainerStyle}
      >
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
        <OptionsButton isOpen={isOptionsMenuOpen} setIsOpen={setIsOptionsMenuOpen} />
      </div>
      <OptionsMenu open={isOptionsMenuOpen} headerColor={headerColor} setHeaderColor={setHeaderColor}/>
      <main>
        <Popup isOpen={popupIsOpen}>
          <code>{copiedText}</code>
          <span> is copied in your clipboard 😉️</span>
        </Popup>
        <SearchBar onFilter={setFilter} />
        <Content filter={filter} copyHandler={copyHandler} />
      </main>
      <Footer />
    </div>
  );
}

const buttonsContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: "20px",
  right: "20px",
  width: "110px"
};

export default App;
