import { makeAutoObservable } from "mobx";

class Purse {
    cash = {
        '5000': 0,
        '2000': 1,
        '1000': 4,
        '500': 0,
        '200': 0,
        '100': 2,
    }

  constructor() {
    makeAutoObservable(this);
    }

    increment(value) {
        console.log(value);
        // console.log(cash['5000'])
        switch (value) {
            case '5000':
                console.log(this.cash['5000']);
                this.cash['5000'] +=1

                break;
            case '2000':
                this.cash['2000'] +=1

                break;
            case '1000':
                this.cash['1000'] += 1
                console.log(this.cash['1000']);

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
                console.log(this.cash['5000']);
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

export default new Purse();
