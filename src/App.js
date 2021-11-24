// import { observer } from 'mobx-react-lite'
import { useState } from "react";
// import atm from './store/atm'
// import purse from './store/purse'

import AddCash from "./components/AddCash";
import GetCash from "./components/GetCash";

// const App = observer(() =>{
function App() {
  // const [addCash, setAddCash] = useState('')
  // const onInputChange = (e) => {
  //   const { name, value } = e.currentTarget
  //   switch (name) {
  //     case 'addCash':
  //       setAddCash(value)
  //       break;

  //     default:
  //       break;
  //   }

  // }

  // const onSubmitForm = (e) => {
  //   e.preventDefault()
  //   purse.decrement(addCash)
  //   atm.increment(addCash)
  //   setAddCash('')
  // }

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
    <>
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

      {/* <form onSubmit={onSubmitForm}>
        <label>
          Внесите деньги по одной купюре
          <input
            type='text'
            name='addCash'
            value={addCash}
            onChange={onInputChange}

          ></input>
        </label>
        <button type='submit'>Внести</button>
      </form>

      <p>{ atm.cash['1000']}</p>
      <p>{ purse.cash['1000']}</p> */}
    </>
  );
}

export default App;
