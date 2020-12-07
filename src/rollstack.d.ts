/**
 * Generates a random float number that can be used for seeding
 */
export function generateSeed(): number
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min Minimal value (inclusive)
 * @param max Maximum value (inclusive)
 */
export function randomNumber(min: number, max: number): number
/**
 * Returns a random string with specified length
 * @param length String length
 * @param charset Defines the character set to be used, default: a...z0...9
 */
export function randomString(length: number, charset?: string[] | string): string
