interface Params {
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string;
  toppings: string[];
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public size: string;
  public toppings: string[];

  //   private toppings: string[];   -------> private property
  //   private toppings: readonly string[];   -------> private property

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string): boolean {
    console.log(topping);
    return true;
  }

  public addTopping(newTopping: string) {
    // this will not be available in IDE dropdown
    this.toppings.push(newTopping);
  }
}

const pizza: IPizza = new Pizza({ size: "medium", toppings: ["cheese"] });

console.log(pizza);

export {};
