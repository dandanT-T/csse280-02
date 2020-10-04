/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */


var rhit = rhit || {};
var now = new Date();
const options = { weekday: 'short', year: 'numeric',
month: 'long', day: 'numeric', hour12: false, hour:
'2-digit', minute:'2-digit'};

rhit.updateView = (amount) => {

	document.querySelector("#currentTime").innerHTML = now.toLocaleString('en-US',options);
}



rhit.PageController = class {
	constructor() {
		this.TimeCalc = new rhit.TimeCalc();
	}


}

rhit.TimeCalc = class {

	constructor() {

	}

	getCurrentTime() {

	}
}

rhit.main = function () {
	console.log("Ready");
	rhit.updateView();
	var buttons = document.querySelectorAll(".buttons>.btn");
	buttons.forEach((button, index) => {
		button.onclick = (event) => {
			var buttonInfo = button.innerHTML;
			var posOrNeg = 1;
			var year = 0;
			// var timeInterval;
			if(buttonInfo.indexOf("-1")!=-1){
				posOrNeg = -1;
			}
			console.log(posOrNeg);
			if(buttonInfo.indexOf("century")!=-1){
				year = now.getFullYear()+posOrNeg*100;
				now.setFullYear(year);
				this.updateView();
			}else if(buttonInfo.indexOf("decade")!=-1){
				decade = now.getFullYear()+posOrNeg*10;
				now.setFullYear(decade);
				this.updateView();
			}else if(buttonInfo.indexOf("year")!=-1){
				decade = now.getFullYear()+posOrNeg*1;
				now.setFullYear(decade);
				this.updateView();
			}else if(buttonInfo.indexOf("month")!=-1){
				month = now.getMonth()+posOrNeg*1;
				now.setMonth(month);
				this.updateView();
			}else if(buttonInfo.indexOf("day")!=-1){
				day = now.getDate()+posOrNeg*1;
				now.setDate(day);
				this.updateView();
			}else if(buttonInfo.indexOf("hour")!=-1){
				hour = now.getHours()+posOrNeg*1;
				now.setHours(hour);
				this.updateView();
			}

		}

		var resetButton = document.querySelector("#returnButton>.btn");
		resetButton.onclick = (params) => {
			now = new Date();
			rhit.updateView();
		}
	});

	

};

rhit.main();