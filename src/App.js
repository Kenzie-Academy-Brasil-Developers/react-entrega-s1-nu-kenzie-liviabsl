import { useState } from 'react';
import './App.css';
import FinancesPage from './FinancesPage';
import HomePage from './Homepage';


function App() {
  const [homePage, setHomePage] = useState(true)

  const [listTransactions, setListTransactions] = useState([])
  const [backup, setBackUp] = useState([])

  return (
    <div className="App">
      {homePage ? (
      <HomePage setHomePage = {setHomePage}/>
      ):(
      <FinancesPage setHomePage = {setHomePage} listTransactions = {listTransactions} setListTransactions = {setListTransactions} backup={backup} setBackUp={setBackUp}/>
      
      )}
    </div>
      
  );
}

export default App;
