export function randomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max) + 1 // To include max as well
  return Math.floor(Math.random() * (max - min)) + min
}

export function randomFloat(min: number, max: number) {
  // Max is not included, but for floats it doesn't matter
  // as we will always have values close to it 0.9999999
  return Math.random() * (max - min) + min
}

export function randomFrom<T>(values: T[]): T {
  return values[randomInt(0, values.length - 1)]
}
