import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pokemon } from '../../interface'
import Flex from '../shared/Flex'
import Loading from '../shared/Loading'

type PokedexPokemonImage = Pick<Pokemon, 'name'>
function PokedexPokemonImage({ name }: PokedexPokemonImage) {
  const [imgLoading, setImgLoading] = useState(true)

  const navigate = useNavigate()
  const navigator = () => {
    navigate(`/pokemons/${name}`)
  }
  const containerStyle = css`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: white;
    background-image: linear-gradient(#eee 0.1em, transparent 0.1em);
    background-size: 100% 1.2em;
  `

  useEffect(() => {
    const img = new Image()
    img.src = `https://projectpokemon.org/images/normal-sprite/${name}.gif`
    img.onload = () => {
      setImgLoading(false)
    }
    return setImgLoading(true)
  }, [name])

  return (
    <Flex css={containerStyle} onClick={navigator}>
      {imgLoading ? (
        <Loading />
      ) : (
        <img
          src={`https://projectpokemon.org/images/normal-sprite/${name}.gif`}
          alt={name}
          width={400}
          height={400}
        />
      )}
    </Flex>
  )
}

export default PokedexPokemonImage
