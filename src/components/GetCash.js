import { observer } from "mobx-react-lite";
import { useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";

const GetCash = observer(({ onBtnClick }) => {
  const [getCash, setGetCash] = useState("");
  const [limit, setLimit] = useState(false);
  // const [warning, setWarning] = useState(false);
    const nominals = ["5000", "2000", "1000", "500", "200", "100"];
//   const nominals = [5000, 2000, 1000, 500, 200, 100];
  const onInputChange = (e) => {
    setLimit(false);
    const { name, value } = e.currentTarget;
    switch (name) {
      case "getCash":
        setGetCash(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (getCash > purse.total || getCash > atm.total) {
      setLimit(true);
    }
    if (getCash <= purse.total && getCash <= atm.total) {
    //   if (getCash === '5000') {
    //       if (atm.cash[getCash] !== 0) {
    //           purse.increment(getCash);
    //           atm.decrement(getCash);
    //       }
    //     }
        if (nominals.includes(getCash)) {
            if (atm.cash[getCash] !== 0) {
              purse.increment(getCash);
              atm.decrement(getCash);
          }
        }
        if (Number(getCash) > 5000) {

            const balance = Number(getCash)

        }

    }
    //   if (getCash > 5000) {

    //   }
    //   setLimit(false)

    // purse.decrement(getCash);
    // atm.increment(getCash);
    setGetCash("");
  };

  return (
    <>
      {/* <p>Банкомат принимает купюры номиналом 5000, 2000, 1000, 500, 200 и 100</p> */}
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

      <p>atm {atm.cash["5000"]}</p>
      <p>purse{purse.cash["5000"]}</p>
      <p>atm {atm.cash["1000"]}</p>
      <p>purse{purse.cash["1000"]}</p>
      <p>atm total{atm.total}</p>
      <p>purse total{purse.total}</p>
    </>
  );
});
export default GetCash;


