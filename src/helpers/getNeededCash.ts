let getNeededCash = (
  amountRequired: number,
  limits: { [x: number]: number }
) => {
  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  function collect(amount: number, nominals: number[]) {
    if (!nominals.length) return;
    let currentNominal: number = nominals[0];
    let avaliableNotes: number = limits[currentNominal]; //доступное количество в банкомате купюр
    let notesNeeded = Math.floor(amount / currentNominal); // узнаем нужное количество купюр для выдачи
    let numberOfNotes = Math.min(avaliableNotes, notesNeeded); //получаем количество, которое можем выдать, исходя из доступных и требуемых

    let result: { [x: string]: number } | undefined = collect(
      amount - numberOfNotes * currentNominal,
      nominals.slice(1)
    ); //вычисляем оставшуюся сумму к выдаче, если 0, выходим, если >0, ищем другие купюры
    let finishResult: any = numberOfNotes
      ? { [currentNominal]: numberOfNotes, ...result }
      : result;
    return finishResult; //если все выдать не удалось, то записываем полученные купюры в объект и идем дальше выдавать, если сумма вся, то выдаем итог, сколько и каких купюр выдаем
  }

  return collect(amountRequired, nominals);
};

export { getNeededCash };
