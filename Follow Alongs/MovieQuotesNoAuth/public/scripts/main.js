var rhit = rhit || {};

rhit.FB_COLLECTION_MOVIEQUOTE = "MovieQuotes";
rhit.FB_KEY_QUOTE = "quote";
rhit.FB_KEY_MOVIE = "movie";
rhit.FB_KEY_LAST_TOUCHED = "lastTouched";
rhit.fbMovieQuotesManager = null;

/** function and class syntax examples */
rhit.ListPageController = class {
	constructor() {
		// document.querySelectorAll("#submitAddQuote").onclick = (event) => {

		// };

		document.querySelector("#submitAddQuote").addEventListener("click", (event) => {
			const quote = document.querySelector("#inputQuote").value;
			const movie = document.querySelector("#inputMovie").value;
			rhit.fbMovieQuotesManager.add(quote, movie);
		});
	}
	updateList() {

	}
};

rhit.MovieQuote = class {
	constructor(id, quote, movie) {
		this.id = id;
		this.quote = quote;
		this.movie = movie;

	}

}

rhit.FbMovieQuotesManager = class {
	constructor() {
		console.log("created FbMovieQuotesManager");
		this._documentSnapshots = [];
		this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_MOVIEQUOTE);
	}
	add(quote, movie) {
		// Add a new document with a generated id.
		this._ref.add({
			[rhit.FB_KEY_QUOTE]: quote,
			[rhit.FB_KEY_MOVIE]: movie,
			[rhit.FB_KEY_LAST_TOUCHED]:firebase.firestore.Timestamp.now(),
			})
			.then(function (docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function (error) {
				console.error("Error adding document: ", error);
			});

		console.log(`add quote ${quote}`);
		console.log(`add movie ${movie}`);

	}
	beginListening(changeListener) {}
	stopListening() {}
	// update(id, quote, movie) {    }
	// delete(id) { }
	get length() {}
	getMovieQuoteAtIndex(index) {}
}



/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	if (document.querySelector("#listPage")) {
		console.log("listpage");
		rhit.fbMovieQuotesManager = new rhit.FbMovieQuotesManager();
		new rhit.ListPageController();
		// console.log(object);
	}

	if (document.querySelector("#detailPage")) {
		console.log("detail page");
	}
	// Temp code for read and add
	// const ref = firebase.firestore().collection("MovieQuotes");
	// ref.onSnapshot((querySnapshot) => {

	// 	querySnapshot.forEach((doc) => {
	// 		console.log(doc.data());
	// 	});

	// });

	// ref.add({
	// 	quote: "My second test",
	// 	movie: "First movie",
	// 	lastTouched: firebase.firestore.Timestamp.now(),
	// })

};

rhit.main();