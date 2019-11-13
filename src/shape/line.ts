import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Line {
  type: 'line'
  length: Range
  style: Style
  modifiers: Modifiers
}
