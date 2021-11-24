// import { observer } from 'mobx-react-lite'
// import { useState } from 'react'
// import atm from './store/atm'
// import purse from './store/purse'

import AddCash from "./components/AddCash";

// const App = observer(() =>{
function App () {
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

  return (
    <>
      <AddCash/>

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
