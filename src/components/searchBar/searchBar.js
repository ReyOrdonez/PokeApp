import React, { useState } from 'react';
import './searchBar.css';



export default function searchBar() {

    return(
        <div>
            <img className = 'pokeLogo' alt = 'pokeLogo' src = {require('./logo.png')}/>
            <h1>Bienvenido a la PokeApi</h1>
            <p>Sientete libre de buscar cualquier pokemon y leer acerca de el</p>
            <form>
                <input 
                className='searchBar'
                placeholder='¿Qué pokemon quieres buscar?'
                />
            </form>
        </div>
    )
}   