// we need to use extension when parameters of different type may be
// passed to the function but we need to make sure that these parameters are gonna have
//  "length" value (string, array)

//    1)
const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
};

// or like use an interface for that
// =================================================================================================
interface ILength {
  length: number;
}
const logLength2 = <T extends ILength>(arg: T) => {
  console.log(arg.length);
};
// =================================================================================================

console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength2(["qwerty"]));
// console.log(logLength(2));       ------------->    error because type number doesn't have "length"

//    2)
// we ca't use pure generics here because type number or string can be passed as a parameter
// and it won't have properties "firstName" or "lastName". So here we need to use extends
const addFullName = <P extends { firstName: string; lastName: string }>(
  person: P
) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};

// or like use an interface for that
// =================================================================================================
interface IPerson {
  firstName: string;
  lastName: string;
}

const addFullName2 = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};
// =================================================================================================

console.log(addFullName({ firstName: "Jane", lastName: "Doe" }));
console.log(addFullName2({ firstName: "Jane", lastName: "Doe", age: 20 }));

export {};
