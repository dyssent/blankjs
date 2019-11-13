import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Text {
  type: 'text'
  style: Style
  size: Range
  modifiers: Modifiers
  text?: string | string[]
}
