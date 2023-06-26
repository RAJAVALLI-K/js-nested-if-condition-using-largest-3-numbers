// Find the largest of three numbers using nested if

let a = parseInt(prompt("Enter a first value:"));
let b = parseInt(prompt("Enter a second value:"));
let c = parseInt(prompt("Enter a third value:"));

if(a>b){
    if(a>c){
        console.log("a is big");
    }
    else{
        console.log("c is big");
    }
}
else if(b>c){
    console.log("b is big");
}
else{
    console.log("c is big");
}