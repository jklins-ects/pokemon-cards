import { Pokemon } from "../types/Pokemon";

interface PokemonDetailsProps {
    pokemon: Pokemon;
}

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3>Details for {pokemon.name}</h3>
                <p>{pokemon.details}</p>
            </div>
        </div>
    );
}
