import { calcRange, Random } from '../../common'
import { Rotate, Translate, Scale } from '../../modifier'

export function buildTransforms(
  transforms: { rotate?: Rotate; translate?: Translate; scale?: Scale },
  rnd: Random
) {
  const chunks: string[] = []
  if (transforms.translate) {
    const t = transforms.translate
    chunks.push(`translate(${calcRange(t.x, rnd)},${calcRange(t.y, rnd)})`)
  }

  if (transforms.rotate) {
    const t = transforms.rotate
    const xy = t.origin ? `,${calcRange(t.origin.x, rnd)},${calcRange(t.origin.y, rnd)}` : ''
    chunks.push(`rotate(${calcRange(t.angle, rnd)}${xy})`)
  }

  if (transforms.scale) {
    const t = transforms.scale
    chunks.push(`scale(${calcRange(t.x, rnd)}${t.y ? ',' + calcRange(t.y, rnd) : ''})`)
  }
  return chunks.join(' ')
}
