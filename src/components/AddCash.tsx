import { observer } from "mobx-react-lite";
import { ChangeEvent, FormEvent, useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";

type funcClick = () => void
const AddCash = observer(({ onBtnClick }: { onBtnClick: funcClick }) => {
  const [addCash, setAddCash] = useState("");

  const onInputChange = (e: ChangeEvent) => {
    const { name, value } = e.currentTarget as HTMLTextAreaElement;
    switch (name) {
      case "addCash":
        setAddCash(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    purse.decrement(addCash, 1);
    atm.increment(addCash, 1);
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
    </>
  );
});
export default AddCash;
