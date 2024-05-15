import { Color } from './constant/Colors'
import { ColorType } from './constant/pokemonTypeColors'

export interface Pokemon {
  name: string
}

export interface PokemonList {
  results: Pokemon[]
}

export interface pokemonData {
  height: number
  weight: number
  name: string
  id: number
  sprites: { front_default: string }
  stats: { base_stat: number }[]
  types: { type: { name: ColorType } }[]
}

export interface PokemonSpecies {
  name: string
  color: { name: Color }
  flavor_text_entries: { flavor_text: string; language: { name: 'en' | 'ko' | 'jp' } }[]
  genera: { genus: string; language: { name: 'ko' | 'jp' | 'en' } }[]
}