const addExpression = function (x: number, y: number) {
  return x + y;
};

const res = addExpression(3, 5);
// infers type of the return value ------> number

// if we need to state the type of the return value, we do it as follows...
const multiplyExpression = function (x: number, y: number): number {
  return x * y;
};

//optional parameter
const divideExpression = function (y: number, x?: number): number {
  return x ? x / y : y;
};

//rest operator
const fn = function (a: number, b: number, c: number, ...restArgs: number[]) {};

// not to write all of this explicitly we make a type of the function
type AddFn = (a: number, b: number) => number;
type AddFn1 = (a: number | string, b: number) => number;
type AddFn2 = (a: number, b: number) => number | string | void; //returning one of two types

// or u can creadte an interface but type is preferable
interface IAddFn {
  (a: number, b: number): number;
}

const addExpression2: AddFn = function (x, y) {
  return x + y;
};

// --------- methods of objects -----------
enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}
interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  //   logSize: () => void;  ---------> old syntax
  //   logSize?: () => void;  ---------> old syntax
  logSize(): void;
  getSize(): string;
  //   getSize?(): string; --------> optional method
  addTopping(newTopping: string): void;
}
const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sauce", "mushrooms", "olives"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(newTopping) {
    this.toppings.push(newTopping);
  },
};

console.log(pizza);
export {};
