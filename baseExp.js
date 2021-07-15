function powerNum(base,exp){
    return base ** exp;
}

console.log("Power = ",powerNum(2,3))

const disData=()=>"Using Fat Arrow Function...";
const powerNumArr = (base,exp) => base ** exp;
console.log("Power using arrow function = ",powerNumArr(3,2));