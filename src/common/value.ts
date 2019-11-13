import { Random } from './rand'

export interface Value {
  value: number
  spread?: number
}

export function calcValue(v: Value, rnd: Random) {
  return typeof v.spread !== 'undefined' ? v.value + rnd.nextFloat(0, Math.abs(v.spread)) : v.value
}
