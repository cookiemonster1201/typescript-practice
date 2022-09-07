const temps1: number[] = [1, 2, 3, 4, 5];

const temps2: readonly number[] = [1, 2, 3, 4, 5];
//temps2.push(4) -- error

const temps3: (number | string)[] = [1, 2, 3, 4, 5];

const cords: Array<number> = [44.32, 502.457, 98.59];

const entries = Object.entries({ a: 5, b: 8 });
//tuple inferring

// for (const entry of entries) {
// }

console.log(temps1, temps3, cords, temps2);

export {};
