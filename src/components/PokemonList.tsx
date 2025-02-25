import { Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
    pokemonData: Pokemon[];
    selectedPokemon: Pokemon | null;
    onSelectPokemon: (pokemon: Pokemon) => void;
}

function PokemonList({
    pokemonData,
    selectedPokemon,
    onSelectPokemon,
}: PokemonListProps) {
    return (
        <div className="row">
            {pokemonData.map((pokie, idx) => (
                <div key={idx} className="col-md-4">
                    <PokemonCard
                        pokemon={pokie}
                        isSelected={selectedPokemon?.name === pokie.name}
                        onClick={() => onSelectPokemon(pokie)}
                    />
                </div>
            ))}
        </div>
    );
}

export default PokemonList;
