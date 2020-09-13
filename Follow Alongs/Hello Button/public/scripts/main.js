var counter = 0;

function main(){
    console.log("ready");
    document.querySelector("#decButton").onclick = (event) => {
        counter--;
        updateView();
    }
    document.querySelector("#resetButton").onclick = (event) => {
        counter=0;
        updateView();
    }
    document.querySelector("#incButton").onclick = (event) => {
        counter++;
        updateView();
    }
}

function updateView(){
    // document.querySelector("#counter").innerHTML = "Counter = "+counter;
    document.querySelector("#counter").innerHTML = `Count = ${counter}`;
}

main();