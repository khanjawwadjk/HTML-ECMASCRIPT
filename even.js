function isEven(num){
        if(num%2==0){
            console.log(` Number  ${num} is Even`);
        }else{
            console.log(`Number ${num} is Odd`);
        }
    }  


isEven(3); 

const addNum = (num1,num2)=>num1 + num2;
console.log(`Addition of 35 and 65 is ${addNum(35,65)}`);