import { makeAutoObservable } from "mobx";
import decrementFunc from "../helpers/decrement";
import incrementFunc from "../helpers/increment";
class ATM {
  cash = {
    5000: 4,
    2000: 6,
    1000: 9,
    500: 8,
    200: 2,
    100: 5,
  };
  constructor() {
    makeAutoObservable(this);
  }

  get total() {
    const total = Object.entries(this.cash)
      .map((el) => Number(el[0]) * el[1])
      .reduce((el, acc) => {
        return acc + el;
      }, 0);
    return total;
  }
  increment(value: string, quantity: number | any) {
    incrementFunc(this.cash, value, (quantity = 1));
  }
  decrement(value: string, quantity: number | any) {
    decrementFunc(this.cash, value, (quantity = 1));
  }
}

export default new ATM();
