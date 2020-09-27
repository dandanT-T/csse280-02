var divideArray = (params) => {
    var oddArray = [];
    var evenArray = [];
    // console.log(typeof(params));

    params.forEach(element => {
        if(element%2==0){
            evenArray.push(element);
        }else{
            oddArray.push(element);
        }
    });
    oddArray.sort(function(a,b) {return a-b});
    evenArray.sort(function(a,b) {return a-b});

    console.log("Even numbers:");
    evenArray.length==0?console.log("None"):
    evenArray.forEach(element => {
        console.log(element);
    });

    console.log("Odd numbers:");
    oddArray.length==0?console.log("None"):
    oddArray.forEach(element => {
        console.log(element);
    });
}
