import './card.css'

const Card = ({pokemon}) => {
    console.log(pokemon);
    return (
        <div className='card' id={pokemon.types[0].type.name}>
            <h2>{pokemon.name}</h2>
            <img  alt='pokeImage' src = {pokemon.sprites.front_default}/>
            <div className='types'>
                <div id='type' className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</div>
                {pokemon.types[1] ? <div id='type' className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</div> : false}
            </div>
        </div>
    )
}

export default Card;