import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Circle {
  type: 'circle'
  radius: Range
  style: Style
  modifiers: Modifiers
}
