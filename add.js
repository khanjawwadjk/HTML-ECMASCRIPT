function addMe(num1, num2){
    var sum= num1 + num2;
    console.log("Addition of",num1, "and",num2 ,"is",sum);
}

function subMe(num1, num2){
    var sum= num1 - num2;
    console.log("Substraction of",num1,"and",num2 ,"is",sum);
}


function multMe(num1, num2){
    var sum= num1 * num2;
    console.log("Multiplication of" ,num1,"and",num2,"is",sum);
}

function divMe(num1, num2){
    var sum= num1 / num2;
    console.log(`Division of ${num1} and ${num2} is ${sum}`);
}


addMe(2,7);
subMe(2,71);
multMe(22,7);
divMe(79,27);