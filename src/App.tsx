import { useState } from "react";
import AddCash from "./components/AddCash";
import GetCash from "./components/GetCash";
import s from "./App.module.css";
import { Button, Badge } from "react-bootstrap";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [isGet, setIsGet] = useState(false);
  const [isGreeting, setIsGreeting] = useState(true);

  const onBtnAddCashClick = () => {
    setIsAdd(true);
    setIsGreeting(false);
  };
  const onBtnGetCashClick = () => {
    setIsGet(true);
    setIsGreeting(false);
  };
  const onBtnAddBackClick = () => {
    setIsAdd(false);
    setIsGreeting(true);
  };
  const onBtnGetBackClick = () => {
    setIsGet(false);
    setIsGreeting(true);
  };

  return (
    <section className={s.app}>
      {isGreeting && (
        <>
          <h3 className={s.title}>
            <Badge>Добро пожаловать в банкомат!Выберите операцию:</Badge>
          </h3>

          <Button
            type="button"
            variant="outline-primary"
            onClick={onBtnAddCashClick}
            className={s.btnAdd}
          >
            Внести наличные
          </Button>
          <Button
            type="button"
            variant="outline-primary"
            onClick={onBtnGetCashClick}
          >
            Получить наличные
          </Button>
        </>
      )}

      {isAdd && <AddCash onBtnClick={onBtnAddBackClick} />}
      {isGet && <GetCash onBtnClick={onBtnGetBackClick} />}
    </section>
  );
}

export default App;
