var calcWordFrequencies = () => {
    var params = prompt("Please enter your name");
    // console.log(typeof(params));
    var output = new Object();
    var words = params.split(" ");
    words.forEach(element => {
        element in output?output[element]++:output[element]=1;
    });

    words.forEach(element => {
        console.log(element+" "+output[element]);
    });
}