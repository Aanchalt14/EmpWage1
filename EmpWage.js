//UC-8
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalemphrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWagemap = new Map();

function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAZX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
totalWorkingDays++ ;
let empCheck = Math.floor(Math.random() * 10 ) % 3;
let empHrs = getWorkingHours (empCheck);
totalEmpHrs += empHrs ;
empDailyWageArr.push(calcDailyWage(empHrs));
empDailyWageMap.set(totalWorkingDays , calcDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage , dailyWage) {
 return totalWage + dailyWage;
}
console.log("UC7A - Emp wage map total Hrs "
 +Array.from(empDailyWageMap.values()).reduce(totalWages , 0));
