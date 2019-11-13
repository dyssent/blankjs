import { Range } from '../common'

export interface Rotate {
  modifier: 'rotate'
  origin?: {
    x: Range
    y: Range
  }
  angle: Range
}
