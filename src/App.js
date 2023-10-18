import Icon from "./components/icons";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState("Circle Wins");

	const reloadGame = () => {
		setIsCross(false);
		setWinMessage("");
		itemArray.fill("empty", 0, 9);
	};

	const checkIsWinner = () => {
		//
	};

	const changeItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, { type: "success" });
		}

		if (itemArray[itemNumber] === "empty") {
			itemArray[itemNumber] = isCross ? "cross" : "circle";
			setIsCross(!isCross);
		} else {
			return toast("already filled", { type: "error" });
		}

		checkIsWinner();
	};

	const setAlert = () => {};

	// const checkWinner = () => {
	// 	if (itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== "empty") {
	// 		setAlert(`${itemArray[0]} WINS!`);
	// 	} else if (itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
	// 		setAlert(`${itemArray[3]} WINS!`);
	// 	} else if (itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty") {
	// 		setAlert(`${itemArray[6]} WINS!`);
	// 	} else if (itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[6] !== "empty") {
	// 		setAlert(`${itemArray[6]} WINS!`);
	// 	} else if (itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty") {
	// 		setAlert(`${itemArray[1]} WINS!`);
	// 	} else if (itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty") {
	// 		setAlert(`${itemArray[2]} WINS!`);
	// 	} else if (itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty") {
	// 		setAlert(`${itemArray[0]} WINS!`);
	// 	} else if (itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[6] !== "empty") {
	// 		setAlert(`${itemArray[6]} WINS!`);
	// 	}
	// };

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winMessage ? (
						<div className="my-2">
							<h1 className="text-primary text-uppercase text-center mb-5">{winMessage}</h1>
							<Button color="success" block onClick={reloadGame} className="my-5">
								New Game
							</Button>
						</div>
					) : (
						<div>
							<h1 className="text-warning text-uppercase text-center mb-5">{isCross ? "Cross" : "Circle"}, your turn</h1>
						</div>
					)}
					<div className="grid">
						{itemArray.map((item, index) => {
							return (
								<Card>
									<CardBody className="box">
										<Icon name={item} />
									</CardBody>
								</Card>
							);
						})}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
