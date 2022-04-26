/** @format */

// REDUCER - DESCRIBES HOW AN ACTION MODIFIES THE STATE

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	isLoggedIn: false,
}

export const loginStatusSlice = createSlice({
	name: "loginStatus",
	initialState,
	reducers: {
		toggleLogin: (state) => {
			state.isLoggedIn = !state.isLoggedIn
		},
	},
})

export const { toggleLogin } = loginStatusSlice.actions

export default loginStatusSlice.reducer
