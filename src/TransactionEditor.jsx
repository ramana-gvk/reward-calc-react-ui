import { useState } from 'react'

function TransactionEditor({addTransaction}) {
    const [transaction, setTransaction] = useState({})

    return (
    <form onSubmit={(evt) => evt.preventDefault()}>
        <label>
          Date:
          <input type="text" value={transaction.date}
            onChange={(e) => setTransaction({...transaction, date: e.target.value})} />
        </label><br />
        <label>
          Amount:
          <input type="text" value={transaction.amount}
            onChange={(e) => setTransaction({...transaction, amount: e.target.value})}/>
        </label><br/>
        <button onClick={() => {addTransaction(transaction); setTransaction({date:"", amount:""})}}>
          Add Transactions
        </button>
    </form>
    )
}

export default TransactionEditor