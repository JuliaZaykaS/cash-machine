import { makeAutoObservable } from "mobx";

class Card {
    cash = 20000

  constructor() {
    makeAutoObservable(this);
    }

    increment(value) {
        this.cash+=Number(value)

    }
    decrement(value) {
        this.cash-=Number(value)
    }
}

export default new Card();
