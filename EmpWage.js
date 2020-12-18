//UC-7
//Array helper function
let totEmpWage =0;
function sum (dailyWage) {
 totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total days: " +totalWorkingDays + "total hrs : " +totalEmpHrs + "Emp Wage" +totEmpWage );

function totalWages(totalWage , dailyWage ) {
  return totalWage + dailyWage;
}
console.log ("UC7A - emp wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC7B - show the day along ith daily wage using array map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage) {
 dailyCntr++ ;
 return dailyCntr +"=" +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage map");
console.log(mapDayWithWageArr);


//UC -7C _Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
 return dailyWage.includes("160");
}

let fullDayWageArr= mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter when fulltime wage earned");
console.log(fullDayWageArr);

//UC7D - find the first occurance when full time wage was earned using find function
function findFulltimeWage(dailyWage) {
 return dailyWage.includes("160");
}
console.log("UC 7D-first time full time wage was earned on day" +mapDayWithWageArr.find((findFulltimeWage));


//UC 7E - check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
 return dailyWage.includes("160");
}

console.log("UC 6E - Check all element hae full time wage :" +fullDayWageArr.every(isAllFullWage));

//UC 7G - Find the number of days the employee worked
function totalDaysWorked (numOfDays , dailyWage) {
  if(dailyWage>0) return numOfDays+1;
  return numOfDays ;
}

console.log("UC 7G - number of days emp worked :" +empDailyWageArr.reduce(totalDaysWorked , 0));
 

