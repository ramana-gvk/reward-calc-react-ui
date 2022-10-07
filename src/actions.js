import { calculatedRewards } from './rewards.slice'

export async function calculateRewards(dispatch, transactions) {
    const options = {
        method: 'POST',
        body: JSON.stringify(transactions),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch('http://localhost:8080/rewardPointsCalculator', options);
    const rewardPoints = await response.json();
    dispatch(calculatedRewards(rewardPoints))
}

export async function calculateRewardsFake(dispatch, transactions) {
    const rewardPoints = {
        monthlyRewards: [
            { month: "Nov 2021", points: 40},
            { month: "Dec 2021", points: 60},
            { month: "Jan 2022", points: 20}
        ],
        toltalRewardPoints: 120
    };
    dispatch(calculatedRewards(rewardPoints))
}
