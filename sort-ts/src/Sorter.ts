interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // constructor(public collection: Sortable) { }
  sortCollection(): void {
    // Get the length of collection
    // iterate through it inside of two nested 'for loops'
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // The minus I is going to account for the fact that
      // after we do a full iteration through our array the first time
      // the rightmost element will be in the correct location
      // so we don't have to try to re-sort that again in the future
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// class Sorter {
//   constructor(public collection: any/** TODO: fix me! */) { }
//   sortCollection(): void {
//     // Get the length of collection
//     // iterate through it inside of two nested 'for loops'
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       // The minus I is going to account for the fact that
//       // after we do a full iteration through our array the first time
//       // the rightmost element will be in the correct location
//       // so we don't have to try to re-sort that again in the future?
//       for (let j = 0; j < length - i - 1; j++) {
//         // If collection is an array of numbers
//         if (this.collection instanceof Array) {
//           // Do the actual comparison logic and swapping logic
//           if (this.collection[j] > this.collection[j + 1]) {
//             // Get the reference element on the left hand side
//             const leftHand = this.collection[j];
//             // take the right hand side and throw it over to the left
//             this.collection[j] = this.collection[j + 1];
//             // take the left hand side and throw it over to the right
//             this.collection[j + 1] = leftHand;
//           }
//         }
//       }
//     }
//   }
// }