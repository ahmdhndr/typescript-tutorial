import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // When compare a string, JavaScript behind the scene use the charCodeAt for each string
    // for example, capital 'X' have charCodeAt 88 (X = 88), and lowercase 'a' have charCodeAt 97 (a = 97)
    // reference: https://www.asciitable.com/
    // So, when comparing X and a, and we expect X to move to the right it not going to happen since the output will be false
    // In order to do comparing correctly, we should convert the string to lowercase first
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Convert/separate string into an array of characters
    const characters = this.data.split('');

    // Do the swap!!
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    // update the data with the new string
    this.data = characters.join('');
  }
}