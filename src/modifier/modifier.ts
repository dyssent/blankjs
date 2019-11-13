import { Rotate } from './rotate'
import { Translate } from './translate'
import { Scale } from './scale'
import { Replicate } from './replicate'

export type Transformation = Rotate | Translate | Scale

export interface Modifiers {
  transforms: {
    rotate?: Rotate
    translate?: Translate
    scale?: Scale
  }
  replication: Replicate
}
