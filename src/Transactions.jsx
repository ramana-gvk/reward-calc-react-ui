import './Rewards.css'

function Transactions({transactions}) {
    const transactionRows = transactions && transactions.length &&
    transactions.map(({date, amount}, index) => {
        return (
          <tr key={index}>
            <td>{date}</td>
            <td>${amount}</td>
          </tr>
        )
    })

    return (
    <table>
        <caption>Transactions</caption>
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
            </tr>
        </thead>
        { transactionRows.length &&
         <tbody>
            {transactionRows}
         </tbody>}
    </table>
    )
}

export default Transactions;