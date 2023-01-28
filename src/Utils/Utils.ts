/**
 *
 * @param min Lower bound
 * @param max Upper bound
 * @returns Number between `min` and `max`
 */
export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 *
 * @returns a hexcode string
 */
export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
