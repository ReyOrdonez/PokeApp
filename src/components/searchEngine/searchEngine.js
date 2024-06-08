import React, {useState, useEffect} from "react";
import ShowMoreButton from "../showMoreButton/button";
import '../searchEngine/searchEngine.css';
import Card from "../card/card";


export default function SearchEngine(){
    const [data, setData] = useState(null);
    const [filtredList, setFiltredList] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        try{
            async function logPokemons(){  //Requests data from the api, and saves in 'Data'
                const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
                const response = await request.json();
                setData(response);
                }
                logPokemons();

        } catch (error){  //Error handler
            console.log(error);
        }
    },[]); //Hooke's depedencies, only executes one time, when the component renders for first time

    function handleSearch(e){  //Only saves data if is equal to user's search, it is executed every time the user types something
        e.preventDefault();
        let searchResults = data.results.filter((item) => item.name.startsWith(search));
        searchResults = searchResults.map( async(item) => await fetchPokemon(item.url));
        Promise.all(searchResults).then((results) => {
            setFiltredList(results);
        });
        
    }
    async function fetchPokemon(url){
            const request = await fetch(url);
            const response = await request.json();
            return response;
    }

    

    return(
        <div>
            <form onSubmit={handleSearch}>
            <input
            className="searchBar"
            placeholder="¿Qué pokemon quieres buscar?"
            type="text"
            onChange = {(e) => setSearch(e.target.value)}
            />
            </form>
            <div className="flexContainer">
            {
                filtredList.map((pokemon) => <Card pokemon = {pokemon} key={pokemon.name}/>)
            }
            </div>
            <br/>
            <br/>
            <ShowMoreButton handleOnClick = {''}/>
        </div>
    )
}