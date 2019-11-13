import { Style } from '../common'
import { Modifiers } from '../modifier'

export interface Path {
  type: 'path'
  style: Style
  modifiers: Modifiers
  /**
   * Example: M150 0 L75 200 L225 200 Z
   */
  data: string
}
