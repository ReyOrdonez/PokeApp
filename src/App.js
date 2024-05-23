import React from 'react';
import NavBar from './components/navBar/navBar.js';
import SearchEngine from './components/searchEngine/searchEngine.js';
import './App.css';


function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <img className = 'pokeLogo' alt = 'pokeLogo' src = {require('./logo.png')}/>
      <h1>Bienvenido a la pokeApi</h1>
      <p>Sientete libre de buscar cualquier pokemon y leer acerca de el :)</p>
      <SearchEngine/>
    </div>
  );
}

export default App;
