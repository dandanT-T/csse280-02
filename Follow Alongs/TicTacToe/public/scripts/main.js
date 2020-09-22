var rhit = rhit || {};

/** globals */
rhit.variableName = "";


rhit.PageController = class {
	

	constructor() {
		// Enable the on chilck listeners
		this.game = new rhit.Game();
	}

	methodName() {

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
		console.log(this.board);
		console.log('this.board = ', this.board);
		console.log('this.state = ', this.state);
	}
	pressButtonAtIndex(buttonIndex) {

	}

	getMarkAtIndex(buttonIndex) {
		return "X";
	}

	getState() {
		return "X's Turn";
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();