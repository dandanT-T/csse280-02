/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Zhicheng Kai
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
// rhit.variableName = "";
rhit.counter = 0;

rhit.main = function () {
	console.log("Ready");
	const buttons = document.querySelectorAll("#counterButtons button");
	// for(let i = 0; i<buttons.length; i++){
	// 	const button = buttons[i];
	// 	button.onclick = (event) =>{
	// 		console.log('You pressed', button);
	// 	}
	// }

	for(const button of buttons){
		button.onclick = (event) =>{
			console.log('You pressed', button);
		}
	}

	// buttons.forEach((button) => {
	// 	button.onclick = (event) =>{
	// 		console.log('You pressed', button);
	// 	}
	// });
};

rhit.updateCounter = function () {
	
};

rhit.main();
