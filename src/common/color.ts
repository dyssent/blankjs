import { PaletteSource, getPalette } from '../palette'
import { Config } from '../Blank'
import { Random } from './rand'

export interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

export interface ColorCustom {
  type: 'custom'
  value: string
}

export interface ColorPalette {
  type: 'palette'
  palette: PaletteSource
}

export type Color = ColorCustom | ColorPalette

export function calcColor(color: Color, context: Config, rnd: Random) {
  switch (color.type) {
    case 'custom':
      return color.value
    case 'palette':
      const palette = getPalette(color.palette, context)
      if (!palette) {
        return 'pink'
      }
      switch (palette.type) {
        case 'values':
          return rnd.nextFrom(palette.values)
        case 'gradient':
          // TODO const value = randomFloat(0, 1);
          return 'pink'
      }
  }
}
