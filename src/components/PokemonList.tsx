import { Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

const pokemonData: Pokemon[] = [
    {
        name: "Bulbasaur",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg",
        desc: "Something about Bulbasaur",
        details: "More information about Bulbasaur",
    },
    {
        name: "Charmander",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg",
        desc: "Something about Charmander",
        details: "More information about Charmander",
    },
    {
        name: "Charizard",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
        desc: "Something about Charizard",
        details: "More information about Charizard",
    },
    {
        name: "Squirtle",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg",
        desc: "Something about Squirtle",
        details: "More information about Squirtle",
    },
    {
        name: "Pikachu",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg",
        desc: "Something about Pikachu",
        details: "More information about Pikachu",
    },
    {
        name: "Blastoise",
        image: "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/9.svg",
        desc: "Something about Blastoise",
        details: "More information about Blastoise",
    },
];

function PokemonList() {
    return (
        <div className="row">
            {pokemonData.map((pokie) => (
                <div className="col-md-4">
                    <PokemonCard pokemon={pokie} />
                </div>
            ))}
        </div>
    );
}

export default PokemonList;
