const multBiggerNum = (num1,num2,num3,num4) =>{
    let bigNum = 0;
    
    bigNum = (num1>num2) ? num1 : num2;
    bigNum = (bigNum>num3) ? bigNum : mum3;
    bigNum = (bigNum>num4) ? bigNum : num4;

    return bigNum;
}

console.log(`Bigger Number between four numbers is ${multBiggerNum(84,53,42,26)}`)

//OR

const multBiggerNumOPt = (num1,num2,num3,num4)=>{
    bigNum = (num1>num2) ? num1 : num2;
    bigNum1 = (num3>num4) ? num3 : num4;
    bigNum2 = bigNum > bigNum1 ? bigNum : bigNum1;
    return bigNum2; 
}
console.log("Bigger no. is =",multBiggerNumOPt(23,87,23,15));

console.log("### Using Math Libraries ###");

const multBiggerNumMath =(num1,num2,num3,num4)=>Math.max(num1,num2,num3,num4);
console.log(`Using Math Library ${multBiggerNumMath(21,85,35,78)}`);