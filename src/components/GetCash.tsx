import { observer } from "mobx-react-lite";
import { useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";
import card from '../store/card'
import {getNeededCash} from '../helpers/getNeededCash'
import React from "react";

type funcClick = () => void
const GetCash = observer(({ onBtnClick }: { onBtnClick: funcClick }) => {
  const [getCash, setGetCash] = useState("");
  const [limit, setLimit] = useState(false);

  const onInputChange = (e: React.ChangeEvent) => {
    setLimit(false);
    const { name, value } = e.currentTarget as HTMLTextAreaElement;
    switch (name) {
      case "getCash":
        setGetCash(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(getCash) > card.cash || Number(getCash) > atm.total) {
      setLimit(true);
      return
    }
    const money = getNeededCash(Number(getCash), atm.cash)
    if (!money) {
      setLimit(true);
      return
    }

    const newArr = Object.entries(money)

    newArr.forEach(el => {
      purse.increment(el[0], el[1])
      atm.decrement(el[0], el[1])
    })

    setGetCash("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>
          Введите сумму кратную 100
          <input
            type="text"
            name="getCash"
            value={getCash}
            onChange={onInputChange}
          ></input>
        </label>
        <button type="submit">Получить наличные</button>
      </form>
      {limit && (
        <p>
          Операция не может быть выполнена.Введите другую сумму или заберите
          карту
        </p>
      )}
      <button type="button" onClick={onBtnClick}>
        В главное меню
      </button>
    </>
  );
});
export default GetCash;


