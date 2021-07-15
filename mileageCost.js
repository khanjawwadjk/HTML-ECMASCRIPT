const mileageCost =(dist, mileage, cost) => (dist/mileage)*cost;
console.log(`Cost of fuel is rupees is ${mileageCost(520,15,109)}`);

console.log("\n### Using Math Library ###\n");

const mileageCostMath = (dist,mil,cost) =>Math.ceil(dist/mil)*cost;
console.log(`Round value = ${mileageCostMath(520,15,109)}`)