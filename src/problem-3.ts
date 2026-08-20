// A fitness app lets a user log their step count for each day of the week as a plain number, and needs to add them all up.

const calculateWeeklySteps = (steps:number[]): number =>{

    const total:number = steps.reduce((sum , num)=> sum + num , 0);

    return total;

}

console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));


