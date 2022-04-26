/** @format */

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, thunkTest } from "./redux/reducers/counterSlice"
import { toggleLogin } from "./redux/reducers/loginStatusSlice"

function App() {
	// displaying state in components
	const count = useSelector((state) => state.counter.count)
	const isLoggedIn = useSelector((state) => state.loginStatus.isLoggedIn)

	const dispatch = useDispatch()
	return (
		<div className="App">
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					dispatch(increment())
				}}
			>
				+
			</button>
			<button
				onClick={async () => {
					// dispatch returns {type: 'reducername/actionname', payload: whatever the computed value returns}
					const { payload } = dispatch(decrement(5))
					console.log(`The value after decrement is: ${payload}`)

					// const { payload } = await dispatch(thunkTest({ num: 5 }))
					// console.log(payload)
				}}
			>
				-
			</button>
			{isLoggedIn ? <h3>Valuable Info</h3> : ""}
			<button
				onClick={() => {
					dispatch(toggleLogin())
				}}
			>
				LOG IN/OUT
			</button>
		</div>
	)
}

export default App
