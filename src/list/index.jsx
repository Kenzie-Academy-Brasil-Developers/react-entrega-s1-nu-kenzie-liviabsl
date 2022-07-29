import Card from "../card"

function List({listTransactions, setListTransactions, backup, setBackUp}){


    return(
        <ul className="ul-lista">
        {
            listTransactions.map((item, index)=>(
                <Card item = {item} key = {index} setListTransactions = {setListTransactions} listTransactions={listTransactions} backup={backup} setBackUp={setBackUp}/>
            ))
        }
        </ul>
    )

}

export default List