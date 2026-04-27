import { Component } from '@angular/core';
import { Spec } from '../spec/spec';
import { Pokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-lista',
  imports: [Spec,],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  listapokemon: Pokemon[];
  selectedPokemon?: Pokemon;
  constructor(){
    this.listapokemon =[
      {
        id: 1,
        name: 'Pikachu',
        type: 'Electric',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        description: 'Pikachu is an Electric-type Pokémon introduced in Generation I. It is known as the Mouse Pokémon and is the mascot of the Pokémon franchise.',
        hp: 35
      },
      {
        id: 2,
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        description: 'Bulbasaur is a Grass/Poison-type Pokémon introduced in Generation I. It is known as the Seed Pokémon and is the first Pokémon in the National Pokédex.',
        hp: 45
      }
    ]
  }
  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
