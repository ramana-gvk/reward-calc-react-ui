import { configureStore } from '@reduxjs/toolkit'
import rewardsReducer from './rewards.slice'

export default configureStore({reducer:  rewardsReducer})