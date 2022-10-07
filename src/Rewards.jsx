import './Rewards.css'

function Rewards({rewardPoints}) {
    const rewardRows = rewardPoints && rewardPoints.monthlyRewards
    && rewardPoints.monthlyRewards.length &&
    rewardPoints.monthlyRewards.map(({month, points}) => {
        return (
          <tr key={month}>
            <td>{month}</td>
            <td>{points}</td>
          </tr>
        )
    })

    return (
    <table>
        <caption>Customer Rewards</caption>
        <thead>
            <tr>
                <th>Month</th>
                <th>Reward Points</th>
            </tr>
        </thead>
        { rewardRows.length && <tbody> {rewardRows} </tbody> }
        <tfoot>
            <tr>
                <th>Total</th>
                <th>{rewardPoints.toltalRewardPoints}</th>
            </tr>
        </tfoot>
    </table>
    )
}

export default Rewards;