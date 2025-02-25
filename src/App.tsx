import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import { Pokemon } from "./types/Pokemon";
import PokemonDetails from "./components/PokemonDetails";

/*
Components we will want:
PokemonCard (Name, Image path, description)
PokemonList (List of Pokemon)
PokemonDetails(Name, Details)
*/
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
function App() {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(
        null
    );

    const handleSelectPokemon = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
    };

    return (
        <div className="container">
            <PokemonList
                pokemonData={pokemonData}
                selectedPokemon={selectedPokemon}
                onSelectPokemon={handleSelectPokemon}
            />
            {/* If a Pokemon is selected, display the details. Otherwise don't.
            This is a CONDITIONAL RENDER eg. true && "dog" == "dog"
            false && "dog" == false*/}
            {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
        </div>
    );
}

export default App;
