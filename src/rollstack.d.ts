declare type charsetName = 'alphabet' | 'number' | 'hex' | 'alphanum' | 'base64'

declare const rollstack: {
  /**
  * Generates a random float number that can be used for seeding
  */
  generateSeed(): number;
  /**
  * Returns a random integer between min (inclusive) and max (inclusive).
  * @param min Minimal value (inclusive)
  * @param max Maximum value (inclusive)
  */
  randomNumber(min: number, max: number): number;
  /**
   * Returns a random string with specified length
   * @param length String length
   * @param charset Defines the character set to be used, default: 'alphanum'
   */
  randomString(length: number, charset?: charsetName | string[]): string;
}

export = rollstack
