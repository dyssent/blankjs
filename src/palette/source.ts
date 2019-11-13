import { BuiltinPalettes } from './builtin'
import { Config } from '../Blank'

export interface PaletteSourceBuiltin {
  type: 'builtin'
  id: string
}

export interface PaletteSourceProvided {
  type: 'provided'
  id: string
}

export type PaletteSource = PaletteSourceBuiltin | PaletteSourceProvided

export function getPalette(source: PaletteSource, context: Config) {
  switch (source.type) {
    case 'builtin':
      return BuiltinPalettes[source.id]

    case 'provided':
      return context.palettes[source.id]
  }
}
