import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import TransactionEditor from './TransactionEditor'
import Transactions from './Transactions'
import Rewards from './Rewards'
import {clearTransactions, addTransaction} from './rewards.slice'
import {calculateRewards, calculateRewardsFake } from './actions'

function App() {
  const dispatch = useDispatch()
  const rewards = useSelector((state) => state)

  return (
    <div className="App">
      <h2>Reward Point Calculator</h2>
      <TransactionEditor addTransaction={(t) => dispatch(addTransaction(t))}/>
      <button onClick={() => dispatch(clearTransactions())}>
          Clear Transactions
      </button>
      <button onClick={() => calculateRewardsFake(dispatch)}>
          Calculate Rewards
      </button>
      <Transactions transactions={rewards.transactions} />
      <Rewards rewardPoints={rewards.rewardPoints} />
    </div>
  )
}

export default App
