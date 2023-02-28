// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number; // Number can be used too, but it's a javaScript object

age = 12;
age = 12.1;
// age = "12"; we can't do that

let userName: string;
userName = "Morgan";

let isInstructor: boolean;
isInstructor = true;

let nullable: null;
// nullable = 12; not possible

// More complex types

let hobbies: string[];
hobbies = ["Games", "Animes"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Morgan",
  age: 33,
};

let people: Person[] = [];
people.push(
  {
    name: "Morgan",
    age: 33,
  },
  {
    name: "John",
    age: 99,
  }
);

// Type inference
let courseExample = "React - The Complete Guide";
// courseExample = 12341; = not possible

let course: string | number = "React - The Complete Guide";
course = 12341;

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printValue(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray[0].split('');