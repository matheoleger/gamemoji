import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Content } from "./components/Content";
import { SearchBar } from "./components/SearchBar"
import { Footer } from './components/Footer';
import { Popup } from './components/Popup';
import { sleep } from './utils';

function App() {

  const [filter, setFilter] = useState("");
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupText, setPopupText] = useState("");


  const copyHandler = (copiedText: string) => {
    setPopupIsOpen(true);

    setPopupText(`${copiedText} is copied in your clipboard 😉️`);

    sleep(3000).then(() => setPopupIsOpen(false));
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Popup text={popupText} isOpen={popupIsOpen}/>
        <SearchBar onFilter={setFilter}/>
        <Content filter={filter} copyHandler={copyHandler}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
