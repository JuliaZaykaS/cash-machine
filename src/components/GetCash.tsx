import React from "react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import atm from "../store/atm";
import purse from "../store/purse";
import card from "../store/card";
import { getNeededCash } from "../helpers/getNeededCash";
import { Button, Form, InputGroup, Badge } from "react-bootstrap";
import s from "../App.module.css";

type funcClick = () => void;
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
      return;
    }
    const money = getNeededCash(Number(getCash), atm.cash);
    if (!money) {
      setLimit(true);
      return;
    }

    const newArr = Object.entries(money);

    newArr.forEach((el) => {
      purse.increment(el[0], el[1]);
      atm.decrement(el[0], el[1]);
    });

    setGetCash("");
  };

  return (
    <>
      <Form onSubmit={onSubmitForm} className={s.form}>
        <Form.Group className="mb-3">
          <InputGroup.Text>Введите сумму кратную 100</InputGroup.Text>
          <Form.Control
            type="text"
            name="getCash"
            value={getCash}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="outline-success">
          Получить наличные
        </Button>
      </Form>
      {limit && (
        <h3>
          <Badge bg="danger">Операция не может быть выполнена.</Badge>
          <Badge bg="danger">Введите другую сумму или заберите карту</Badge>
        </h3>
      )}
      <Button type="button" variant="outline-danger" onClick={onBtnClick}>
        В главное меню
      </Button>
    </>
  );
});
export default GetCash;
