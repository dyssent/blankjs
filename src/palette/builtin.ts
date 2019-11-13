import { Palette } from './palette'

export const PaletteNine: Palette = {
  type: 'values',
  id: 'nine',
  name: 'Nine',
  values: [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#bcbd22',
    '#17becf'
  ]
}

export const PaletteBlue5: Palette = {
  type: 'values',
  id: 'blue5',
  name: 'Blue 5',
  values: ['#0E5A8A', '#106BA3', '#137CBD', '#2B95D6', '#48AFF0']
}

export const PaletteGreen5: Palette = {
  type: 'values',
  id: 'green5',
  name: 'Green 5',
  values: ['#0A6640', '#0D8050', '#0F9960', '#15B371', '#3DCC91']
}

export const PaletteOrange5: Palette = {
  type: 'values',
  id: 'orange5',
  name: 'Orange 5',
  values: ['#A66321', '#BF7326', '#D9822B', '#F29D49', '#FFB366']
}

export const PaletteRed5: Palette = {
  type: 'values',
  id: 'red5',
  name: 'Red 5',
  values: ['#A82A2A', '#C23030', '#DB3737', '#F55656', '#FF7373']
}

export const PaletteQuantative10: Palette = {
  type: 'values',
  id: 'quant10',
  name: 'Quantative 10',
  values: [
    '#2965CC',
    '#29A634',
    '#D99E0B',
    '#D13913',
    '#8F398F',
    '#00B3A4',
    '#DB2C6F',
    '#9BBF30',
    '#96622D',
    '#7157D9'
  ]
}

export const PaletteVermillion5: Palette = {
  type: 'values',
  id: 'verm5',
  name: 'Vermillion 5',
  values: ['#9E2B0E', '#B83211', '#D13913', '#EB532D', '#FF6E4A']
}

export const PaletteRose5: Palette = {
  type: 'values',
  id: 'rose5',
  name: 'Rose 5',
  values: ['#A82255', '#C22762', '#DB2C6F', '#F5498B', '#FF66A1']
}

export const PaletteViolet5: Palette = {
  type: 'values',
  id: 'violet5',
  name: 'Violet 5',
  values: ['#5C255C', '#752F75', '#8F398F', '#A854A8', '#C274C2']
}

export const PaletteIndigo5: Palette = {
  type: 'values',
  id: 'indigo5',
  name: 'Indigo 5',
  values: ['#5642A6', '#634DBF', '#7157D9', '#9179F2', '#AD99FF']
}

export const PaletteCobalt5: Palette = {
  type: 'values',
  id: 'cobalt5',
  name: 'Cobalt 5',
  values: ['#1F4B99', '#2458B3', '#2965CC', '#4580E6', '#669EFF']
}

export const PaletteTurquoise5: Palette = {
  type: 'values',
  id: 'turq5',
  name: 'Turquoise 5',
  values: ['#008075', '#00998C', '#00B3A4', '#14CCBD', '#2EE6D6']
}

export const PaletteForest5: Palette = {
  type: 'values',
  id: 'forest5',
  name: 'Forest 5',
  values: ['#1D7324', '#238C2C', '#29A634', '#43BF4D', '#62D96B']
}

export const PaletteLime5: Palette = {
  type: 'values',
  id: 'lime5',
  name: 'Lime 5',
  values: ['#728C23', '#87A629', '#9BBF30', '#B6D94C', '#D1F26D']
}

export const PaletteGold5: Palette = {
  type: 'values',
  id: 'gold5',
  name: 'Gold 5',
  values: ['#A67908', '#BF8C0A', '#D99E0B', '#F2B824', '#FFC940']
}

export const PaletteSepia5: Palette = {
  type: 'values',
  id: 'sepia5',
  name: 'Sepia 5',
  values: ['#63411E', '#7D5125', '#96622D', '#B07B46', '#C99765']
}

export const BuiltinPalettes: { [key: string]: Palette } = {
  [PaletteNine.id]: PaletteNine,
  [PaletteBlue5.id]: PaletteBlue5,
  [PaletteGreen5.id]: PaletteGreen5,
  [PaletteOrange5.id]: PaletteOrange5,
  [PaletteRed5.id]: PaletteRed5,
  [PaletteQuantative10.id]: PaletteQuantative10,
  [PaletteVermillion5.id]: PaletteVermillion5,
  [PaletteRose5.id]: PaletteRose5,
  [PaletteViolet5.id]: PaletteViolet5,
  [PaletteIndigo5.id]: PaletteIndigo5,
  [PaletteCobalt5.id]: PaletteCobalt5,
  [PaletteTurquoise5.id]: PaletteTurquoise5,
  [PaletteForest5.id]: PaletteForest5,
  [PaletteLime5.id]: PaletteLime5,
  [PaletteGold5.id]: PaletteGold5,
  [PaletteSepia5.id]: PaletteSepia5
}
