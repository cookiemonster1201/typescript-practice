//used to describe an object

interface PluginConfig {
  readonly selector: string;
  perPage: number;
  startIndex?: number; //not obligatory property; ie can be omitted
  draggable: boolean;
}

const config: PluginConfig = {
  selector: "plugin-1",
  perPage: 4,
  //   startIndex: 0,
  draggable: false,
};

// when you don't know how many keys are gonna be in the obj
interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 4,
  poly: 8,
  kiwi: 12,
  //   vicky: 'qwe' -------> error
};

//extending interfaces

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

console.log(config, employees, cc);

export {};
