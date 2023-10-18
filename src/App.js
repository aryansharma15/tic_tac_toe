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
	const [winMessage, setWinMessage] = useState("");

	const reloadGame = () => {
		setIsCross(false);
		setWinMessage("");
		itemArray.fill("empty", 0, 9);
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

	const checkIsWinner = () => {
		if (itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !== "empty") {
			setWinMessage(`${itemArray[0]} WINS!`);
		} else if (itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty") {
			setWinMessage(`${itemArray[3]} WINS!`);
		} else if (itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty") {
			setWinMessage(`${itemArray[6]} WINS!`);
		} else if (itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[6] !== "empty") {
			setWinMessage(`${itemArray[6]} WINS!`);
		} else if (itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty") {
			setWinMessage(`${itemArray[1]} WINS!`);
		} else if (itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty") {
			setWinMessage(`${itemArray[2]} WINS!`);
		} else if (itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty") {
			setWinMessage(`${itemArray[0]} WINS!`);
		} else if (itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[6] !== "empty") {
			setWinMessage(`${itemArray[6]} WINS!`);
		}
		//
		else if (
			itemArray[0] !== "empty" &&
			itemArray[1] !== "empty" &&
			itemArray[2] !== "empty" &&
			itemArray[3] !== "empty" &&
			itemArray[4] !== "empty" &&
			itemArray[5] !== "empty" &&
			itemArray[6] !== "empty" &&
			itemArray[7] !== "empty" &&
			itemArray[8] !== "empty"
		) {
			setWinMessage("ENDS IN A DRAW...");
		}
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winMessage ? (
						<div className="my-2">
							<h1 className="text-danger text-uppercase text-center mb-5">{winMessage}</h1>
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
								<Card color="primary" onClick={() => changeItem(index)}>
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
