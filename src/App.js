import React, { useState } from 'react';
import NavBar from './components/navBar/navBar.js';
import './App.css';


function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <NavBar/>
      <img className = 'pokeLogo' alt = 'pokeLogo' src = {require('./logo.png')}/>
      <h1>Bienvenido a la pokeApi</h1>
      <p>Sientete libre de buscar cualquier pokemon y leer acerca de el :)</p>
      <form>
        <input
        className='searchBar' 
        type='text'
        placeholder='¿Qué pokemon quieres buscar?'/>
      </form>
    </div>
  );
}

export default App;
