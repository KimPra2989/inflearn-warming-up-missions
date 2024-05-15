import { css } from '@emotion/react'
import { ColorType, TYPE_COLORS } from '../../constant/pokemonTypeColors'
import { TYPE_NAME_KO } from '../../constant/pokemonTypeKo'
import { pokemonData } from '../../interface'
import Badge from '../shared/Badge'
import Flex from '../shared/Flex'
import TextLabel from '../shared/TextLabel'

interface PokemonDetailProps extends Pick<pokemonData, 'height' | 'weight' | 'types'> {
  id: number
  genus: string
  color: string
  flavor: string
}

function PokemonDetail({ height, weight, types, genus, flavor }: PokemonDetailProps) {
  const typesArr = types.map((item) => item.type.name)

  const containerStyle = css`
    margin-top: 80px;
    padding: 30px 50px;
    padding-top: 0;
    width: 400px;
    box-sizing: border-box;
  `
  return (
    <Flex gap="10px" align="start" css={containerStyle}>
      <TextLabel title="분류" content={genus} />
      <TextLabel title="키" content={`${height / 10} m`} />
      <TextLabel title="몸무게" content={`${weight} kg`} />
      <TextLabel title="타입" content={<Types typesArr={typesArr} />} />
      <div>{flavor}</div>
    </Flex>
  )
}

function Types({ typesArr }: { typesArr: ColorType[] }) {
  return (
    <Flex direction="row" gap="6px">
      {typesArr.map((type) => (
        <Badge label={TYPE_NAME_KO[type]} backgroundColor={TYPE_COLORS[type]} key={type} />
      ))}
    </Flex>
  )
}

export default PokemonDetail
