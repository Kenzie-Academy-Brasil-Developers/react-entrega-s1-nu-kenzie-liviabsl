import Card from "../card"

function List({listTransactions, setListTransactions}){


    return(
        <ul className="ul-lista">
        {
            listTransactions.map((item, index)=>(
                <Card item = {item} key = {index} setListTransactions = {setListTransactions} listTransactions={listTransactions}/>
            ))
        }
        </ul>
    )

}

export default List