import { PokemonList, PokemonSpecies, pokemonData } from './interface'

//mainPage
export const fetchPokemonList = async (offset:number = 0, limit:number = 150) => {
    const url = new URL(`https://pokeapi.co/api/v2/pokemon`)
    url.searchParams.set('offset', offset.toString())
    url.searchParams.set('limit', limit.toString())
  
    const response = await fetch(url)
    const result: PokemonList = await response.json()
  
    return result
  }

  export const fetchiPokemonList = async ({pageParam = 0}) => {
    const url = new URL(`https://pokeapi.co/api/v2/pokemon`)
    const limit = 50;
    const offset = pageParam * limit;

    url.searchParams.set('offset', offset.toString())
    url.searchParams.set('limit', limit.toString())
  
    const response = await fetch(url)
    const result: PokemonList = await response.json()
  
    return result
  }

  //detailPage
export const fetchPokemon = async (id: string) => {
  const url = new URL(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const response = await fetch(url)
  const result: pokemonData = await response.json()

  return result
}

export const fetchPokemonSpecies = async (id: string) => {
  const url = new URL(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

  const response = await fetch(url)
  const result: PokemonSpecies = await response.json()

  return result
}
