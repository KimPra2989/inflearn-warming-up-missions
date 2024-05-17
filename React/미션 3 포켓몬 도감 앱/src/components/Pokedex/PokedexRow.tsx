import { css } from '@emotion/react'
import { Colors } from '../../constant/Colors'
import { POKEMON_NAMES_KO } from '../../constant/pokemonKoNames'
import Flex from '../shared/Flex'

interface PokedexRowProps {
  name: string
  index: number
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
const nameWrpperStyle = css({
  width: '120px',
})

function PokedexRow({ name, index, selected, setSelected }: PokedexRowProps) {
  const containerStyle = css`
    height: 100px;
    box-sizing: border-box;
    border: black 1px solid;
    border-bottom: none;
    &:last-child {
      border-bottom: black 1px solid;
    }
    background-color: ${selected == name ? Colors['orange'] : Colors['beige']};
  `
  return (
    <Flex
      as="li"
      justify="space-between"
      direction="row"
      css={containerStyle}
      onClick={() => {
        setSelected(name)
      }}
    >
      <img src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`} alt={name} />
      <span>No. {index.toString().padStart(3, '0')}</span>
      <span css={nameWrpperStyle}>{POKEMON_NAMES_KO[index]}</span>
    </Flex>
  )
}

export default PokedexRow
