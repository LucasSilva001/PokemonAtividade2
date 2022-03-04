import React, {useState, useEffect, FormEvent} from "react";
import api from '../../services/api';


import {Title, Form, CardPoke, Error} from './Style'

interface Pokemon {
    name: string;
    types: string[];
    abilities: string[];
    sprites: string
  }
 
const Dashboard: React.FC = () => {
    const [newPoke, setNewPoke] = useState('');
    const [inputError, setInputError] = useState('');
    const [pokemons, setPokemon] = useState<Pokemon[]>(() => {
        const StoragePokemon = localStorage.getItem(
            '@Pokemons'
        );

        if(StoragePokemon){
            return JSON.parse(StoragePokemon)
        }

        return[];
    });

    const handleAddPokemon = async (event: FormEvent <HTMLFormElement>) =>{
        event.preventDefault();

        if(!newPoke){
            setInputError("Digite um pokémon para pesquisar")
            return;
        }

    try {
        const response = await api.get(`pokemon/${newPoke}`);
        const pokemon = response.data;

        const abilities = pokemon.abilities.map((ability: any) => {
            return ability.ability.name
          })
        
        const types = pokemon.types.map((type: any) =>{
            return type.type.name
        })

        const pokemonData = {
            name: pokemon.name,
            types,
            abilities,
            sprites: pokemon.sprites.other.dream_world.front_default
          }

        setPokemon([pokemonData, ...pokemons])
        setNewPoke('');
        setInputError('');

    } catch(err){
        setNewPoke('');
        setInputError("Esse pokémon não foi encontrado ou não existe.");
    }
}

    useEffect(() => {
        localStorage.setItem(
            '@Pokemons',
            JSON.stringify(pokemons)
        )
    }, [pokemons]);
  
    return (
        <>
            <Title>Procure os pokemons na Pokedéx</Title>
            <Form onSubmit={handleAddPokemon}>
                <input 
                    onChange={e => setNewPoke(e.target.value)}
                    placeholder= "Digite o nome/id do pokémon"
                />
                <button type="submit"> Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <CardPoke>
                {pokemons.map(pokemon => (
                    <div className="poke">
                        <div className="circulo"> 
                            <img src={pokemon.sprites}/>
                            <div className="retangulo">
                                <h4>{pokemon.name}</h4>
                                <strong>Ability</strong>
                                <p>{pokemon.abilities.join(' | ')}</p>
                                <strong>Type</strong>
                                <p>{pokemon.types.join(' | ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardPoke>

        </>
    );
}

export default Dashboard;