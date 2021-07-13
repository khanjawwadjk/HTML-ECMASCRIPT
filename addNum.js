function addNumberOpt(num1,num2){
    return num1 + num2;
}

console.log(addNumberOpt(23,72));
console.log("Adddition of two numbers =\n"+ addNumberOpt(34,89));
console.log(`##############
20 + 32 = ${addNumberOpt(20,32)}
###############`);

//Arrow Function........
console.log("\nUsing Fat Arrow Function..");
const addNumArr=(num1,num2)=> num1 + num2;
const subNumArr=(num1,num2)=> num1 - num2;
const multNumArr=(num1,num2)=> num1 * num2;
const divNumArr=(num1,num2)=> num1 / num2;

console.log("Addition ="+ addNumArr(34,78));
console.log("Substracttion ="+ subNumArr(8,3));
console.log("Multiplication ="+ multNumArr(2,5));
console.log("Division ="+ divNumArr(10,2));