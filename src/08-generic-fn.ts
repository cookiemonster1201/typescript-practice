const reverse = function <T>(array: T[]) {
  return [...array].reverse();
};

// generics are for general utility
//  functions when we don't know exactly parameters of which type will be passed into the function

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(["one", "two", "three"]));
console.log(reverse([{ a: 1 }, { b: 3 }, { c: 8 }]));

// for functions with multiple parameters
const isEqual = function <T, Y>(a: T, b: Y) {
  return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual(3, "3"));

const makeArray = function <T, Y, Z>(a: T, b: Y, c: Z) {
  return [a, b, c];
};

// function makeArray<T, Y, Z>(a: T, b, c) {      -------------> function declaration
//     return [a, b, c];
//   };

// const makeArray = <T, Y, Z>(a: T, b: Y, c: Z) => {    -------------> for arrow functions
//     return [a, b, c];
//   };

console.log(makeArray(3, "yellow", false));

// this is only as an example for rest type generic
const foo = <N, T>(mult: N, ...rest: T[]) => {};

console.log(foo(2, [1, 2, 3]));

export {};
