import { useState } from "react";
import AddCash from "./components/AddCash";
import GetCash from "./components/GetCash";
import s from './App.module.css'

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [isGet, setIsGet] = useState(false);
  const [isGreeting, setIsGreeting] = useState(true)

  const onBtnAddCashClick = (e) => {
    setIsAdd(true);
    setIsGreeting(false)
  };
  const onBtnGetCashClick = (e) => {
    setIsGet(true);
    setIsGreeting(false)
  };
  const onBtnAddBackClick = () => {
    setIsAdd(false)
    setIsGreeting(true)
  }
  const onBtnGetBackClick = () => {
    setIsGet(false)
    setIsGreeting(true)
  }

  return (
    <section className={s.app}>
      {isGreeting && (
          <>
            <p>Добро пожаловать в банкомат!Выберите операцию:</p>

            <button type="button" onClick={onBtnAddCashClick}>
              Внести наличные
            </button>
            <button type="button" onClick={onBtnGetCashClick}>
              Получить наличные
            </button>
          </>
        )}


      {isAdd && <AddCash onBtnClick = {onBtnAddBackClick} />}
      {isGet && <GetCash onBtnClick = {onBtnGetBackClick} />}
    </section>
  );
}

export default App;
