import { css } from '@emotion/react'
import { useQueries } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchPokemon, fetchPokemonSpecies } from '../Fetcher'
import NameAndImage from '../components/Detail/NameAndImage'
import PokemonDetail from '../components/Detail/PokemonDetail'
import StatChart from '../components/Detail/StatChart/StatChart'
import Flex from '../components/shared/Flex'
import { PokemonSpecies, pokemonData } from '../interface'
import Loading from '../components/shared/Loading'

function DetailPage() {
  const { id } = useParams()

  const results = useQueries({
    queries: [
      {
        queryKey: ['pokemon', id],
        queryFn: async () => {
          return await fetchPokemon(id as string)
        },
      },
      {
        queryKey: ['pokemon-species', id],
        queryFn: async () => {
          return await fetchPokemonSpecies(id as string)
        },
      },
    ],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })

  console.log(results)

  if (!results.data[0] || !results.data[1]) return <Loading />

  const [pokemon, species] = results.data as [pokemonData, PokemonSpecies]
  const { height, weight, name, types, stats } = pokemon

  const stat = stats.map((stat) => stat.base_stat)

  const { flavor_text_entries, color, genera } = species
  const { genus } = genera.find((genus) => genus.language.name === 'ko') as {genus : string}
  const falvorText = flavor_text_entries.find((obj) => obj.language.name === 'ko')

  const ConatainerStyle = css`
    margin-top: 40px;
  `

  return (
    <>
      <Flex direction="row" justify="space-around" align="start" css={ConatainerStyle}>
        <PokemonDetail
          id={pokemon.id}
          height={height}
          weight={weight / 10}
          color={color.name}
          types={types}
          genus={genus}
          flavor={falvorText?.flavor_text as string}
        />
        <NameAndImage id={pokemon.id} name={name} />
        <StatChart stat={stat} color={color.name} />
      </Flex>
    </>
  )
}

export default DetailPage
