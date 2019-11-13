import { Range } from '../common'

export interface Scale {
  modifier: 'scale'
  x: Range
  y?: Range
}
