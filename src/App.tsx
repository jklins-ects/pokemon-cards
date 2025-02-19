import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import { Pokemon } from "./types/Pokemon";

/*
Components we will want:
PokemonCard (Name, Image path, description)
PokemonList (List of Pokemon)
PokemonDetails(Name, Details)
*/

function App() {
    return <PokemonList />;
}

export default App;
