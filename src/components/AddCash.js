import { observer } from "mobx-react-lite";
import { useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";

const AddCash = observer(({onBtnClick}) => {
  const [addCash, setAddCash] = useState("");
  // const [warning, setWarning] = useState(false);
  // const nominals = ["5000", "2000", "1000", "500", "200", "100"];
  const onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "addCash":
        setAddCash(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // if (!nominals.includes(addCash)) {
    //   setWarning(true);
    // }
    purse.decrement(addCash);
    atm.increment(addCash);
    setAddCash("");
  };

  return (
    <>
      <p>Банкомат принимает купюры номиналом 5000, 2000, 1000, 500, 200 и 100</p>
      <form onSubmit={onSubmitForm}>
        <label>
          Внесите деньги по одной купюре
          <input
            type="text"
            name="addCash"
            value={addCash}
            onChange={onInputChange}
          ></input>
        </label>
        <button type="submit">Внести</button>

      </form>
      <button type='button' onClick={onBtnClick}>В главное меню</button>

      <p>{atm.cash["1000"]}</p>
      <p>{purse.cash["1000"]}</p>
    </>
  );
});
export default AddCash;
