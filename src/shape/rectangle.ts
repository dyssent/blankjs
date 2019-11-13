import { Range, Style } from '../common'
import { Modifiers } from '../modifier'

export interface Rectangle {
  type: 'rectangle'
  width: Range
  height?: Range
  borderRadius?: Range
  style: Style
  modifiers: Modifiers
}
