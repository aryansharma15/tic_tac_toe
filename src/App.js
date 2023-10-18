import "./App.css";

function App() {
	const reloadGame = () => {};

	const setAlert = () => {};

	const checkWinner = () => {
		if (itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== "empty") {
			setAlert(`${itemArray[0]} WINS!`);
		} else if (itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
			setAlert(`${itemArray[3]} WINS!`);
		} else if (itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty") {
			setAlert(`${itemArray[6]} WINS!`);
		} else if (itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[6] !== "empty") {
			setAlert(`${itemArray[6]} WINS!`);
		} else if (itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty") {
			setAlert(`${itemArray[1]} WINS!`);
		} else if (itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty") {
			setAlert(`${itemArray[2]} WINS!`);
		} else if (itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty") {
			setAlert(`${itemArray[0]} WINS!`);
		} else if (itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[6] !== "empty") {
			setAlert(`${itemArray[6]} WINS!`);
		}
	};

	return (
		<>
			<div>
				<table>
					<tbody>
						<tr></tr>

						<tr></tr>

						<tr></tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default App;
