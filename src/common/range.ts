import { Random } from './rand'

export interface Range {
  left: number
  right: number
  step?: number
}

export function calcRange(r: Range, rnd: Random) {
  if (r.left === r.right) {
    return r.left
  }

  if (typeof r.step !== 'undefined') {
    const buckets = (r.right - r.left) / r.step
    return r.left + rnd.nextInt(0, buckets) * r.step
  }
  return rnd.nextFloat(r.left, r.right)
}
