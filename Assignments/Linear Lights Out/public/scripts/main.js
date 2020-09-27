/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Zhicheng Kai
 */

var rhit = rhit || {};


rhit.variableName = "";

// rhit.functionName = function () {

// };

rhit.PageController = class {
	constructor() {
		this.game = new rhit.Game();
		const lights = document.querySelectorAll(".light");

		lights.forEach((light, index) => {
			light.onclick = (event) => {
				console.log(this.game.getStatus() != rhit.Game.GAMESTATE.WIN);
				if (this.game.getStatus() != rhit.Game.GAMESTATE.WIN) {
					this.game.steps++;
					console.log(this.game.steps);
					console.log(this.game.state);
					const lightstate = this.game.lightOnOff[index];
					if (lightstate == 0) {
						this.game.lightOnOff[index] = 1;
					} else {
						this.game.lightOnOff[index] = 0;
					}

					if (index == 0) {
						this.game.lightOnOff[1] == "0" ? this.game.lightOnOff[1] = "1" : this.game.lightOnOff[1] = "0";
					} else if (index == 6) {
						this.game.lightOnOff[5] == "0" ? this.game.lightOnOff[5] = "1" : this.game.lightOnOff[5] = "0";
					} else {
						this.game.lightOnOff[index - 1] == "0" ? this.game.lightOnOff[index - 1] = "1" : this.game.lightOnOff[index - 1] = "0";
						this.game.lightOnOff[index + 1] == "0" ? this.game.lightOnOff[index + 1] = "1" : this.game.lightOnOff[index + 1] = "0";
					}
					// console.log("lights "+this.game.lightOnOff);
					this.game.setStatus();
					this.updateView();
				} else {
					// do nothings
				}

			}
		});

		document.querySelector("#newGame").onclick = (event) => {
			this.game = new rhit.Game();
			this.updateView();
		};
		this.updateView();
	}

	updateView() {
		this.game.lightOnOff.forEach((element, index) => {

			document.getElementById(index + 1).innerHTML = element;
			document.getElementById(index + 1).style.background = rhit.Game.ONOFFBGCOLOR[element];
			document.getElementById(index + 1).style.color = rhit.Game.ONOFFCOLOR[element];
		});

		if (this.game.state == rhit.Game.GAMESTATE.NEWGAME) {
			document.getElementById("gamestatus").innerHTML = "Make the bottons match";
		}
		if (this.game.state == rhit.Game.GAMESTATE.INGAME) {
			document.getElementById("gamestatus").innerHTML = `you have taken ${this.game.steps} moves so far.`;
		}
		if (this.game.state == rhit.Game.GAMESTATE.WIN) {
			document.getElementById("gamestatus").innerHTML = `you won in ${this.game.steps} steps.`;
		}
	}
}

rhit.Game = class {
	static ONOFFBGCOLOR = {
		1: "#dcba32",
		0: "#373d42"
	}

	static ONOFFCOLOR = {
		1: "black",
		0: "white"
	}

	static GAMESTATE = {
		WIN: "win",
		INGAME: "ingame",
		NEWGAME: "newgame"
	}

	steps = 0;
	lightOnOff = [];
	state = rhit.Game.GAMESTATE.NEWGAME;
	constructor() {
		for (let i = 0; i < 7; i++) {
			this.lightOnOff.push(Math.round(Math.random()));
		}
		this.steps = 0;
		this.state = rhit.Game.GAMESTATE.NEWGAME;

	}

	getStatus() {
		return this.state;
	}

	setStatus() {
		if (this.steps == 0) {
			this.state = rhit.Game.GAMESTATE.NEWGAME;
		} else {
			var sum = 0;
			for (var element of this.lightOnOff) {
				sum += parseInt(element);
			}
			// console.log(sum);
			// console.log((sum == 0) || (sum == 1));
			if ((sum == 0) || (sum == 7)) {
				this.state = rhit.Game.GAMESTATE.WIN;
				
			} else {
				this.state = rhit.Game.GAMESTATE.INGAME;
			}
		}
		console
		console.log(this.state);

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	new rhit.PageController();
};

rhit.main();