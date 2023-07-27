import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, -13, -5, 0]);
numbersCollection.sortCollection();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('hEndArSyaH');
charactersCollection.sortCollection();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-200);
linkedList.add(50);
linkedList.add(78);
linkedList.add(27);

linkedList.sortCollection();
linkedList.print();