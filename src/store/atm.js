import { makeAutoObservable } from "mobx"

class ATM {
    cash = {
        '5000': 4,
        '2000': 6,
        '1000': 9,
        '500': 8,
        '200': 2,
        '100': 5,
    }
    constructor() {
        makeAutoObservable(this)
    }
    increment(value) {
        // console.log(cash['5000'])
        console.log(value);
        switch (value) {
            case '5000':
                // console.log(this.cash['5000']);
                this.cash['5000'] +=1

                break;
            case '2000':
                this.cash['2000'] +=1

                break;
            case '1000':
                this.cash['1000'] +=1

                break;
            case '500':
                this.cash['500'] +=1

                break;
            case '200':
                this.cash['200'] +=1

                break;
            case '100':
                this.cash['100'] +=1

                break;

            default:
                break;
        }
    }
    decrement(value) {
        console.log(value);
         switch (value) {
            case '5000':
                // console.log(this.cash['5000']);
                this.cash['5000'] -=1

                break;
            case '2000':
                this.cash['2000'] -=1

                break;
            case '1000':
                this.cash['1000'] -=1

                break;
            case '500':
                this.cash['500'] -=1

                break;
            case '200':
                this.cash['200'] -=1

                break;
            case '100':
                this.cash['100'] -=1

                break;

            default:
                break;
        }

    }



}

export default new ATM()