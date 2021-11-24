import atm from '../store/atm.js'
import purse from '../store/purse.js'

let limits = atm.cash
console.log('limits', limits);

let getNeededCash = (amountRequired, limits) => {

    function collect(amount, nominals) {
        if (!nominals.length) return
        let currentNominal = nominals[0]
        let avaliableNotes = limits[currentNominal]
        let notesNeeded = Math.floor(amount / currentNominal)
        let numberOfNotes = Math.min(avaliableNotes, notesNeeded)

        let result = collect(amount - numberOfNotes * currentNominal, nominals.slice(1));
        if (result) {
            return numberOfNotes ? {[currentNominal]: numberOfNotes, ...result} : result
        }
// console.group("Count");
//     console.log("amount", amount);
//     console.log("nominals", nominals);
//     console.log("currentNominal", currentNominal);
//     console.log("avaiableNotes", avaliableNotes);
//     console.log("notesNeeded", notesNeeded);
//     console.log("numberOfNotes ", numberOfNotes);
//     console.groupEnd();


    }



    let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a)
    console.log('nominals', nominals);
    // let quantity = Object.values(limits)
    // console.log('quantity', quantity);
    return collect(amountRequired, nominals)
}


console.log(getNeededCash(2500, limits))