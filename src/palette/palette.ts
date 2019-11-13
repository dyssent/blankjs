import { PaletteName } from './names'

export interface PaletteBase {
  id: string
  name: PaletteName
}

export interface PaletteValues extends PaletteBase {
  type: 'values'
  values: string[]
}

export interface PaletteGradient extends PaletteBase {
  type: 'gradient'
  values: string[]
}

export type Palette = PaletteValues | PaletteGradient
