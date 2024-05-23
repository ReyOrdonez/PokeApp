import React, {useState, useEffect} from "react";
import Card from "../Card/card";


export default function SearchEngine(){
    const [data, setData] = useState();
    let filtredList;

    useEffect(() => {
        async function logPokemons(){
        const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const response = await request.json();
        setData(response);
        }
        logPokemons();
    },[]);

    function handleSearch({target}){
        filtredList = data.results.filter((item) =>  item.name.startsWith(target.value));
        console.log(filtredList);
    }
    

    return(
        <div>
            <input
            className="searchBar"
            placeholder="¿Qué pokemon quieres buscar?"
            type="text"
            onChange={handleSearch}
            />

            <Card 
            pokemonList = {data}
            search = {''}
            />
        </div>
    )
}