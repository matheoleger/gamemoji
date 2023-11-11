import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Content } from "./components/Content";
import { SearchBar } from "./components/SearchBar"
import { Footer } from './components/Footer';

function App() {

  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <Header/>
      <main>
        <SearchBar onFilter={setFilter}/>
        <Content filter={filter}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
