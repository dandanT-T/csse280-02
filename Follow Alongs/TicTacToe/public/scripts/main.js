var rhit = rhit || {};

/** globals */
rhit.variableName = "";


rhit.PageController = class {
	

	constructor() {
		// Enable the on chilck listeners
		this.game = new rhit.Game();
		const squares = document.querySelectorAll(".square");
		for(const square of squares){
			// square.onclick = function(event) {
			// 	const buttonIndex = parseInt(square.CDATA_SECTION_NODE.buttonIndex);
			// 	this.game.pressButtonAtIndex(buttonIndex);
			// }
			square.onclick = (event) => {
				const buttonIndex = parseInt(square.dataset.buttonIndex);
				this.game.pressButtonAtIndex(buttonIndex);
				this.updateView();
			};
		}

		document.querySelector("#newGameButton").onclick = (event) => {
			this.game = new rhit.Game();
			this.updateView();
		};
		this.updateView();
	}

	updateView() {
		const squares = document.querySelectorAll(".square");
		squares.forEach((square, index) => {
			square.innerHTML = this.game.getMarkAtIndex(index);
		})
		document.querySelectorAll("#gameStateText").innerHTML = this.game.state;
	}
}

rhit.Game = class {
	static Mark = {
		X: "X",
		O: "O",
		NONE: " "
	}

	static State = {
		X_TURN: "X's Turn",
		O_TURN: "O's Turn",
		X_WIN: "X Wins!",
		O_WIN: "O Wins!",
		TIE: "TIE Game"
	}
	constructor() {
		// TODO: Make instance variables
		this.state = rhit.Game.State.X_TURN;
		this.board = [];
		for (let k = 0; k < 9; k++) {
			this.board.push(rhit.Game.Mark.NONE);
		}
		
		// console.log(this.board);
		// console.log('this.board = ', this.board);
		// console.log('this.state = ', this.state);
	}
	pressButtonAtIndex(buttonIndex) {
		this.board[buttonIndex] = rhit.Game.Mark.X;
		console.log("Chicked",buttonIndex);
		console.log(this.board);
	}

	getMarkAtIndex(buttonIndex) {
		return this.board[buttonIndex];
	}

	getState() {
		return this.state;
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();