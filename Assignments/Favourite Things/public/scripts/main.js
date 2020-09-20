var counter = 0;
var favColor = "800000";
var colrButtonClicked = [0,0,0,0];


const favoriteColorBox = document.querySelector("#favoriteColorBox");

function main(){
    console.log("ready");
    document.querySelector("#decrement").onclick = (event) => {
        counter--;
        updateView();
    }
    document.querySelector("#reset").onclick = (event) => {
        counter=0;
        updateView();
    }
    document.querySelector("#increment").onclick = (event) => {
        counter++;
        updateView();
    }
    
    const colorButtons = document.querySelectorAll("#colorButton button");
    for(const button of colorButtons){
        
        button.onclick = (event) => {
            favColor = button.dataset.color;
            updateView();
            // console.log(typeof(colorData));

        }
    }




    // blueButton.onclick = (event) => {
    //     blueButton.style.setProperty("color","black");
    //     favoriteColorBox.style.setProperty("background-color","blue");
    // }
}

function updateView(){
    // document.querySelector("#counter").innerHTML = "Counter = "+counter;
    document.querySelector("#counter").innerHTML =  counter;
    const colorBox = document.querySelector("#favoriteColorBox");
    colorBox.style.setProperty("background-color",favColor);
    colorBox.innerHTML = favColor;
    
}

main();