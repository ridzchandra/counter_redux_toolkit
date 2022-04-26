/** @format */

// // REDUCER - DESCRIBES HOW AN ACTION MODIFIES THE STATE

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	count: 0,
}

export const thunkTest = createAsyncThunk(
	"counter/thunkTest",
	async ({ num }, {}) => {
		try {
			if (num > 0) return 2
			else throw new Error()
		} catch (err) {
			// you can access the return value in rejected action's reducer as action.payload, but if you throw error, you can access as action.error
			return { a: 2 }
		}
	}
)

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.count += 1
		},
		decrement: (state, action) => {
			state.count -= action.payload
			// if you set payload here, you can access it as {payload} from the return value of dispatch in the component
			action.payload = state.count
		},
	},
	// extraReducers: {
	// 	[thunkTest.fulfilled]: (state, action) => {
	// 		// for an async thunk function, the return payload can be set in the fulfilled action's reducer
	// 	},
	// },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
