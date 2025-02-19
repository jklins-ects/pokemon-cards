import { Pokemon } from "../types/Pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="card">
            <img src={pokemon.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">{pokemon.desc}</p>
            </div>
        </div>
    );
}

export default PokemonCard;
