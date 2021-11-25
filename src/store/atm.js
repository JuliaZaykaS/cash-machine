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

    get total() {
        // const array = Object.entries(this.cash)
        // console.log(array);
        // console.log(array[0]);
        // console.log(array[0][0]);
        // const normArr = array.map((el) => Number(el[0]) * el[1])
        // console.log(normArr);
        // const result = normArr.reduce((el, acc) => {
        //  return acc+el
        // }, 0)
        // console.log(result);

        const total = Object.entries(this.cash)
            .map((el) => Number(el[0]) * el[1])
        .reduce((el, acc) => {
         return acc+el
        }, 0)
        console.log(total);
        // const total = array.reduce((el, acc) => {
        //     console.log('el',el);
        //     console.log('el[0]', el[0]);
        //     return acc.push(Number(el[0])*el[1])
        // }, [])
        // console.log(total);
        // const total = array.reduce((el, acc) => {
        //     console.log('el',el);
        //     console.log('el[0]', el[0]);
        //     return acc+ Number(el[0])*el[1]
        // }, 0)
        return total

    }
    increment(value, quantity=1) {
        // console.log(cash['5000'])
        console.log(value);
        switch (value) {
            case '5000':
                // console.log(this.cash['5000']);
                this.cash['5000'] +=quantity
                // this.cash['5000'] +=1

                break;
            case '2000':
                this.cash['2000'] +=quantity
                // this.cash['2000'] +=1

                break;
            case '1000':
                // this.cash['1000'] +=1
                this.cash['1000'] +=quantity

                break;
            case '500':
                // this.cash['500'] +=1
                this.cash['500'] +=quantity

                break;
            case '200':
                // this.cash['200'] +=1
                this.cash['200'] +=quantity

                break;
            case '100':
                // this.cash['100'] +=1
                this.cash['100'] +=quantity

                break;

            default:
                break;
        }
    }
    decrement(value, quantity=1) {
        console.log(value);
         switch (value) {
            case '5000':
                // console.log(this.cash['5000']);
                // this.cash['5000'] -=1
                this.cash['5000'] -=quantity

                break;
            case '2000':
                this.cash['2000'] -=quantity
                // this.cash['2000'] -=1

                break;
            case '1000':
                // this.cash['1000'] -=1
                this.cash['1000'] -=quantity

                break;
            case '500':
                this.cash['500'] -=quantity
                // this.cash['500'] -=1

                break;
            case '200':
                this.cash['200'] -=quantity
                // this.cash['200'] -=1

                break;
            case '100':
                this.cash['100'] -=quantity
                // this.cash['100'] -=1

                break;

            default:
                break;
        }

    }



}

export default new ATM()