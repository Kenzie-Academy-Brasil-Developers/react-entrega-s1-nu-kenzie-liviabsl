import { useState } from 'react';
import './App.css';
import FinancesPage from './FinancesPage';
import HomePage from './Homepage';


function App() {
  const [homePage, setHomePage] = useState(true)

  const [listTransactions, setListTransactions] = useState([])


  return (
    <div className="App">
      {homePage ? (
      <HomePage setHomePage = {setHomePage}/>
      ):(
      <FinancesPage setHomePage = {setHomePage} listTransactions = {listTransactions} setListTransactions = {setListTransactions}/>
      
      )}
    </div>
      
  );
}

export default App;
