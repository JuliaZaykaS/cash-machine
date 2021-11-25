import { makeAutoObservable } from "mobx";

class Card {
    cash = 20000

  constructor() {
    makeAutoObservable(this);
    }

    increment(value:string) {
        this.cash+=Number(value)

    }
    decrement(value:string) {
        this.cash-=Number(value)
    }
}

export default new Card();
