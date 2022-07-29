function Card({ item, setListTransactions, listTransactions , backup, setBackUp}) {

    function RemoveCards(removedCard){
        const newListTransactions = listTransactions.filter((item)=> item !== removedCard)
        const newBackUp = backup.filter((item)=> item !== removedCard)
        setListTransactions(newListTransactions)

        setBackUp(newBackUp)
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
          <button className="button-image" onClick={()=> RemoveCards(item)}>
            <img src="./trash.png" alt="lixo" className="img-delete" />
    
          </button>
        </div>
        <p className="tipo-card">{item.type}</p>
      </div>
    </li>
  );
}

export default Card;
