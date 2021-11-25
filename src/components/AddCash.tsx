import { observer } from "mobx-react-lite";
import { ChangeEvent, FormEvent, useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";
import { Button, Form, InputGroup, Badge } from "react-bootstrap";
import s from "../App.module.css";

type funcClick = () => void;
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
      <h4 className={s.title}>
        <Badge bg="info"> Банкомат принимает купюры номиналом:</Badge>
        <Badge bg="info">5000, 2000, 1000, 500, 200 и 100</Badge>
      </h4>
      <Form onSubmit={onSubmitForm} className={s.form}>
        <Form.Group className="mb-3">
          <InputGroup.Text>Внесите деньги по одной купюре</InputGroup.Text>
          <Form.Control
            type="text"
            name="addCash"
            value={addCash}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="outline-success">
          Внести
        </Button>
      </Form>
      <Button type="button" variant="outline-danger" onClick={onBtnClick}>
        В главное меню
      </Button>
    </>
  );
});
export default AddCash;
