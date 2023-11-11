import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Content } from "./components/Content";
import { SearchBar } from "./components/SearchBar"

function App() {

  const [filterString, setFilterString] = useState("");

  return (
    <div className="App">
      <Header/>
      <main>
        <SearchBar filter={setFilterString}/>
        <Content filterString={filterString}/>
      </main>
    </div>
  );
}

export default App;
