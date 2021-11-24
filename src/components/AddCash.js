import { observer } from "mobx-react-lite";
import { useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";

const AddCash = observer(() => {
  const [addCash, setAddCash] = useState("");
  const [warning, setWarning] = useState(false);
  const nominals = ["5000", "2000", "1000", "500", "200", "100"];
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
    if (!nominals.includes(addCash)) {
      setWarning(true);
    }
    purse.decrement(addCash);
    atm.increment(addCash);
    setAddCash("");
  };

  return (
    <>
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
        {warning && <p>Купюры такого номинала банкоматом не принимаются</p>}
      </form>

      <p>{atm.cash["1000"]}</p>
      <p>{purse.cash["1000"]}</p>
    </>
  );
});
export default AddCash;
