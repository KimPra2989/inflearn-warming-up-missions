import { TYPE_COLORS } from './pokemonTypeColors'

export const Colors = {
  blue: TYPE_COLORS['water'],
  black: TYPE_COLORS['dark'],
  brown: TYPE_COLORS['ground'],
  gray: TYPE_COLORS['normal'],
  green: TYPE_COLORS['grass'],
  pink: TYPE_COLORS['psychic'],
  purple: TYPE_COLORS['poison'],
  red: TYPE_COLORS['fire'],
  yellow: TYPE_COLORS['electric'],
  orange: '#f48c3fb3',
  beige: 'beige'
}

export type Color = keyof typeof Colors