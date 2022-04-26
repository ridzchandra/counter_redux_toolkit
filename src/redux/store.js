/** @format */

import { configureStore } from "@reduxjs/toolkit"
import counter from "./reducers/counterSlice"
import loginStatus from "./reducers/loginStatusSlice"

export default configureStore({
	reducer: {
		counter,
		loginStatus,
	},
})
