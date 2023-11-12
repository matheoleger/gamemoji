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
  const [copiedText, setCopiedText] = useState("");


  const copyHandler = (copiedText: string) => {
    setPopupIsOpen(true);
    setCopiedText(copiedText);
    sleep(3000).then(() => setPopupIsOpen(false)); //change duration in the css
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Popup isOpen={popupIsOpen}>
          <code>{copiedText}</code><span> is copied in your clipboard 😉️</span>
        </Popup>
        <SearchBar onFilter={setFilter}/>
        <Content filter={filter} copyHandler={copyHandler}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
