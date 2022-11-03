import * as _ from 'lodash';

async function hello() {
  return 'world';
}

type Style = 'bold' | 'italic';

let font: Style;

font = 'bold';

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: 'Nathan',
  last: 'Tsang',
  job: 'dev'
}

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

const arr: number[] = [];
arr.push(1);
// arr.push('23'); // error
// arr.push(false); // error

type MyList = [number?, string?, boolean?];

const array: MyList = [];
array.push(1);
array.push('23');
array.push(false);

// Generics
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>
// let z: new Observable(23);
