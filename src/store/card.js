import { makeAutoObservable } from "mobx";

class Card {
    cash = 20000

  constructor() {
    makeAutoObservable(this);
    }

    increment(value) {
        console.log(value);
        // console.log(cash['5000'])
        this.cash+=Number(value)

    }
    decrement(value) {
        console.log(value);
        this.cash-=Number(value)


    }
}

export default new Card();
