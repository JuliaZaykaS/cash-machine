import atm from '../store/atm.js'
import purse from '../store/purse.js'

// let limits = atm.cash
// const limits = atm.cash
// let limits = {'5000': 4,
//         '2000': 6,
//         '1000': 9,
//         '500': 8,
//         '200': 2,
//         '100': 5 }
// console.log('limits', limits);

let getNeededCash = (amountRequired, limits) => {

    function collect(amount, nominals) {
        if (!nominals.length) return;
        let currentNominal = nominals[0];
        let avaliableNotes = limits[currentNominal] //доступное количество в банкомате купюр
        let notesNeeded = Math.floor(amount / currentNominal) // узнаем нужное количество купюр для выдачи
        let numberOfNotes = Math.min(avaliableNotes, notesNeeded) //получаем количество, которое можем выдать исходя из доступных и требуемых


        let result = collect((amount - numberOfNotes * currentNominal), nominals.slice(1));
        // if (result) {
            // console.group("Count");
            // console.log('ost', (amount - numberOfNotes * currentNominal));
            //     console.log("amount", amount);
            //     console.log("nominals", nominals);
            //     console.log("currentNominal", currentNominal);
            //     console.log("avaiableNotes", avaliableNotes);
            //     console.log("notesNeeded", notesNeeded);
            //     console.log("numberOfNotes ", numberOfNotes);
            //     // console.log("result ", result);
            //     console.groupEnd();
            return numberOfNotes ? {[currentNominal]: numberOfNotes, ...result} : result
        // }


    }



    let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a)
    console.log('nominals', nominals);
    // let quantity = Object.values(limits)
    // console.log('quantity', quantity);
    return collect(amountRequired, nominals)
}


// let limits = {5000: 4,
//         2000: 6,
//         1000: 9,
//         500: 8,
//         200: 2,
//         100: 5 }
// console.log(getNeededCash(2500, limits))
// console.log(getNeededCash(9000, limits))
// console.log(getNeededCash(7500, limits))

export { getNeededCash }