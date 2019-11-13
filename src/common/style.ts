import { useContext } from 'react'
import { Color, calcColor } from './color'
import { calcRange, Range } from './range'
import { ConfigContext } from '../Blank/context'
import { Config } from '../Blank'
import { Random } from './rand'

export interface Style {
  stroke?: Color
  strokeWidth?: Range
  fill?: Color
  opacity?: Range
}

export function useStyle(style: Style, rnd: Random) {
  const context = useContext<Config>(ConfigContext)
  const stroke = style.stroke ? calcColor(style.stroke, context, rnd) : undefined
  const fill = style.fill ? calcColor(style.fill, context, rnd) : 'transparent'
  const strokeWidth = style.strokeWidth ? calcRange(style.strokeWidth, rnd) : undefined
  const opacity = style.opacity ? calcRange(style.opacity, rnd) : undefined
  return {
    stroke,
    fill,
    strokeWidth,
    opacity
  }
}

export function useLineStyle(style: Style, rnd: Random) {
  const context = useContext<Config>(ConfigContext)
  const stroke = style.stroke ? calcColor(style.stroke, context, rnd) : undefined
  const strokeWidth = style.strokeWidth ? calcRange(style.strokeWidth, rnd) : undefined
  const opacity = style.opacity ? calcRange(style.opacity, rnd) : undefined
  return {
    stroke,
    strokeWidth,
    opacity
  }
}
