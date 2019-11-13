import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Ellipse {
  type: 'ellipse'
  width: Range
  height: Range
  style: Style
  modifiers: Modifiers
}
