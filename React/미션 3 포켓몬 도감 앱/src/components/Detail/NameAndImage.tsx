import { css } from '@emotion/react'
import { POKEMON_NAMES_KO } from '../../constant/pokemonKoNames'
import Flex from '../shared/Flex'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Colors } from '../../constant/Colors'
import Loading from '../shared/Loading'

function NameAndImage({ id, name }: { id: number; name: string }) {
  const [shiny, setShiny] = useState(false)
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = `https://projectpokemon.org/images/${shiny ? 'shiny' : 'normal'}-sprite/${name}.gif`
    img.onload = () => {
      setImgLoading(false)
    }
    return setImgLoading(true)
  }, [name, shiny])

  const imgLink = `https://projectpokemon.org/images/${shiny ? 'shiny' : 'normal'}-sprite/${name}.gif`
  const containerStyle = css`
    margin-top: 80px;
    user-select: none;
  `
  const nameStyle = css`
    font-weight: bold;
    margin-bottom: 10px;
  `
  const imgStyle = css`
    margin-top: 60px;
  `

  return (
    <Flex css={containerStyle}>
      <h1 css={nameStyle}> {`No. ${id}  ${POKEMON_NAMES_KO[id]}`}</h1>
      <ShinyIcon shiny={shiny} setShiny={setShiny} />
      {imgLoading ? (
        <Loading />
      ) : (
        <img src={imgLink} alt={name} width={400} height={400} css={imgStyle} />
      )}
    </Flex>
  )
}

function ShinyIcon({
  shiny,
  setShiny,
}: {
  shiny: boolean
  setShiny: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <svg
      fill={shiny ? Colors.yellow : Colors.black}
      width={32}
      height={32}
      viewBox="0 0 512 512"
      onClick={() => {
        setShiny((prev) => !prev)
      }}
    >
      <g id="SVGRepo_iconCarrier">
        <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" />

        <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" />

        <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
      </g>
    </svg>
  )
}

export default NameAndImage
