import { css } from '@emotion/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef, useState } from 'react'
import { fetchiPokemonList } from '../Fetcher'
import PokedexListWrapper from '../components/Pokedex/PokedexListWrapper'
import PokedexPokemonImage from '../components/Pokedex/PokedexPokemonImage'
import PokedexRow from '../components/Pokedex/PokedexRow'
import Flex from '../components/shared/Flex'
import Loading from '../components/shared/Loading'
import flatten from '../utils/flatten'

function MainPage() {
  const [selected, setSelected] = useState('bulbasaur')

  const olRef = useRef<HTMLOListElement>(null)

  const { data, error, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['projects', 'ind'],
    queryFn: fetchiPokemonList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length
    },
  })
  
  const pokemonList = useMemo(() => {
    if (data) {
      return flatten(data);
    } else {
      return [];
    }
  }, [data]);

  // d데이터 처리
  useEffect(() => {
    const handleFetchNextPage = () => {

      if (!pokemonList) return
      const idx = pokemonList.indexOf(selected)
      if (idx > pokemonList.length - 15) {
        fetchNextPage()
      }
    }

    handleFetchNextPage()
  }, [fetchNextPage, pokemonList, selected])

  // key Event
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!pokemonList) return
      const idx = pokemonList.indexOf(selected)
      e.preventDefault()

      switch (e.key) {
        case 'ArrowUp':
          if (idx > 0) {
            setSelected(pokemonList[idx - 1])
            olRef.current?.scrollBy({
              top: -100,
            })
          }
          break

        case 'ArrowDown':
          if (idx < pokemonList.length - 1) {
            setSelected(pokemonList[idx + 1])
            olRef.current?.scrollBy({
              top: 100,
            })
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [pokemonList, selected, fetchNextPage])

  if (error) console.error(error)

  if (!data || !pokemonList) return <Loading />

  const containerStyle = css({
    width: '100%',
    height: '100%',
  })

  return (
    <>
      <Flex direction="row" align="start" css={containerStyle}>
        <PokedexPokemonImage name={selected} />
        <PokedexListWrapper ref={olRef}>
          {pokemonList.map((pokemon, idx) => (
            <PokedexRow
              name={pokemon}
              index={idx + 1}
              selected={selected}
              setSelected={setSelected}
              key={idx}
            />
          ))}
          {isFetching ? <Loading /> : null}
        </PokedexListWrapper>
      </Flex>
    </>
  )
}

export default MainPage
