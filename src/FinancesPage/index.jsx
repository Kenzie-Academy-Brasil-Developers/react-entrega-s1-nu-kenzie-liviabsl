import "./style.css";
import { useState } from "react";
import List from "../list";
import Vazio from "../cardVazio";

function FinancesPage({
  SetHome,
  setHomePage,
  listTransactions,
  setListTransactions,
  backup,
  setBackUp
}) {
  function change() {
    setHomePage((homePage) => !homePage);
  }

  function FiltroEntrada(){
    setListTransactions(backup.filter((item) => item.type === "Entrada"))
  }

  function FiltroDespesas(){
    setListTransactions(backup.filter((item) => item.type === "Despesa"))
  }

  function FiltroTodos(){
    setListTransactions(backup)
  }

  const [description, SetDescription] = useState("");
  const [value, SetValue] = useState();
  const [type, SetType] = useState("Entrada");

  function NewCard() {
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        type: type,
        value: 
        type === "Despesa" ?
        parseInt(value) * -1
        :
        parseInt(value)
      },
    ]);
    setBackUp([
      ...backup,
      {
        description: description,
        type: type,
        value: 
        type === "Despesa" ?
        parseInt(value) * -1
        :
        parseInt(value)
      },
    ]);
  }

  const Reduce = listTransactions.reduce((a, b) =>  a + b.value,0)

  

  return (
    <div className="corpo-total">
      <header>
        <img src="./NuKenzie2.png" alt="logo" className="logo-header" />
        <button className="paragrafo-header" onClick={change}>
          Início
        </button>
      </header>

      <div className="corpo-e-total">
        <form className="corpo">
          <div className="teste">
            <div className="descricao">
              <p className="paragrafo1-descricao">Descrição</p>
              <input
                className="input-descricao"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => SetDescription(event.target.value)}
              ></input>
              <p className="paragrafo2-descricao">Ex: Compra de roupas</p>
            </div>

            <div className="valores">
              <div className="valor">
                <p className="paragrafo-valor">Valor</p>
                <input type="Number"
                  value={value}
                  className="input-valor"
                  onChange={(event) => SetValue(event.target.value)}
                ></input>
              </div>
              <div className="tipo">
                <p className="paragrafo-tipo">Tipo de valor</p>
                <select
                  className="input-tipo"
                  onChange={(event) => SetType(event.target.value)}
                >
                  <option value="Entrada">Entrada</option>
                  <option value="Despesa">Despesa</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="botao-form"
              onClick={() => NewCard()}
            >
              Inserir valor
            </button>
          </div>

          <div className="valor-total">
            <div className="div-valor-total">
              <p className="paragrafo-valor-total">Valor total</p>
              <p className="soma">R${Reduce}</p>
            </div>
            <p className="paragrafo-valor-total2">O valor se refere ao saldo</p>
          </div>
        </form>

        <div className="financeiro-total">
          <div className="menu-financeiro">
            <p className="paragrafo-financeiro">Resumo financeiro</p>
            <ul className="ul">
              <li className="todos" onClick={()=>FiltroTodos()}>Todos</li>
              <li className="entradas" onClick={()=>FiltroEntrada()}>Entradas</li>
              <li className="despesas" onClick={()=>FiltroDespesas()}>Despesas</li>
            </ul>
          </div>

          {
            listTransactions.length >= 1 ?
            <List listTransactions={listTransactions} setListTransactions={setListTransactions}backup={backup} setBackUp={setBackUp}/>
            :
            <Vazio/>
          }
        </div>
      </div>
    </div>
  );
}

export default FinancesPage;
