import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactions: [
        /**
         * { date: "", amount: 120}
         */
    ],
    rewardPoints: {
        monthlyRewards: [
            /**
             *  {
             *   month: "December 2021",
             *   points: 230
             *  }
             */
        ],
        toltalRewardPoints: 0
    }
}

const rewardsSlice = createSlice({
    name: 'rewards',
    initialState,
    reducers: {
        clearTransactions: (state) => {
            state.transactions = [],
            state.rewardPoints = initialState.rewardPoints
        },
        addTransaction: (state, action) => {
                                     state.transactions.push(action.payload)
                                     state.rewardPoints = initialState.rewardPoints
                                    },
        calculatedRewards: (state, action) => { state.rewardPoints = action.payload}
    }
})

export const {clearTransactions, addTransaction, calculatedRewards} = rewardsSlice.actions
export default rewardsSlice.reducer