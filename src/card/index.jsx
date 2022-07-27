function Card({ item, setListTransactions, listTransactions }) {

    function RemoveCards(removedCard){
        setListTransactions(listTransactions.filter((item)=> item !== removedCard))
      }


  return (
    <li className="lista-cards">
      <div className={
        item.type === "Entrada" ?
        "cards"
        :
        "cards-despesa"
      }>
        <div className="div-cards">
          <p className="paragrafo-card">{item.description}</p>
          <p className="paragrafo-card2">R${item.value}</p>
          <button className="button-image" onClick={RemoveCards}>
            <img src="./trash.png" alt="lixo" className="img-delete" />
    
          </button>
        </div>
        <p className="tipo-card">{item.type}</p>
      </div>
    </li>
  );
}

export default Card;
