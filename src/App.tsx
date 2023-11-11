import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Content } from "./components/Content";
import { SearchBar } from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <SearchBar/>
        <Content/>
      </main>
    </div>
  );
}

export default App;
