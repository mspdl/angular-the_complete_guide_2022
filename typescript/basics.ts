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

let person: {
  name: string;
  age: number;
};
person = {
  name: "Morgan",
  age: 33,
};

let people: {
  name: string;
  age: number;
}[] = [];
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
