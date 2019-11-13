import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Triangle {
  type: 'triangle'
  length1: Range
  length2?: Range
  length3?: Range
  style: Style
  modifiers: Modifiers
}
