import { Pokemon } from "../types/Pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
    isSelected: boolean;
    onClick: () => void;
}

function PokemonCard({ pokemon, isSelected, onClick }: PokemonCardProps) {
    return (
        <div
            className={`card ${isSelected ? "border-primary" : ""}`}
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >
            <img src={pokemon.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">{pokemon.desc}</p>
            </div>
        </div>
    );
}

export default PokemonCard;
