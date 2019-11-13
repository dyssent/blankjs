import { Shape } from '../shape'
import { Palette } from '../palette'
import { PaletteNine } from '../palette/builtin'

export interface Config {
  shapes: Shape[]
  palettes: { [key: string]: Palette }
}

export const DefaultConfig: Config = {
  shapes: [
    {
      type: 'circle',
      radius: {
        left: 1,
        step: 2,
        right: 6
      },
      style: {
        stroke: {
          type: 'custom',
          value: 'transparent'
        },
        fill: {
          type: 'palette',
          palette: {
            type: 'builtin',
            id: 'Nine'
          }
        }
      },
      modifiers: {
        transforms: {
          translate: {
            modifier: 'translate',
            x: {
              left: -64,
              right: 64
            },
            y: {
              left: -64,
              right: 64
            }
          }
        },
        replication: {
          count: {
            left: 10,
            right: 20
          }
        }
      }
    },
    {
      type: 'rectangle',
      width: {
        left: 10,
        right: 60
      },
      height: {
        left: 10,
        right: 60
      },
      style: {
        strokeWidth: {
          left: 1,
          right: 3
        },
        stroke: {
          type: 'palette',
          palette: {
            type: 'builtin',
            id: PaletteNine.id
          }
        },
        fill: {
          type: 'custom',
          value: 'transparent'
        }
      },
      modifiers: {
        transforms: {
          translate: {
            modifier: 'translate',
            x: {
              left: -32,
              right: 32,
              step: 16
            },
            y: {
              left: -32,
              right: 32,
              step: 16
            }
          }
        },
        replication: {
          count: {
            left: 2,
            right: 3
          }
        }
      }
    }
  ],
  palettes: {}
}

export const DefaultSettings = {
  config: DefaultConfig
}
