//UC-1 
const IS_ABSENT =0
let empCheck = Math.floor(Math.random() * 10) % 2;
if ( empCheck == IS_ABSENT) {
    console.log("Employee is absent");
    return ;
}
else {
     console.log("Employee is present");
}


//UC-2
const IS_PART_TIME =1;
const IS_FULL_TIME =2 ;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck){
    case 1 : 
        empHrs = 1;
        break;
    case 2:
        emphrs = 2;
        break;
    default:
        empHrs=0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage :" +empWage);


//UC-3
function getworkingHours(empCheck) {
    switch  (empCheck) {
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrs = 0;
let empCheck = Math.floor(Math.random() *10) %3;
empHrs = getworkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("emp wage " +empWage);


//UC-4
const NUM_OF_WORKING_DAYS =2 ;
let empHrs =0;
for (let day=0; day<NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() *10)%3;
    empHrs += getworkingHo
urs(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hrs :" +empHrs+ "Emp wage : " +empWage);



//UC-5 
const MAX_HRS_IN_MONTH =100;
const NUM_OF_WORKING_DAYS =10;
let totalEmpHrs =0;
let totalWorkingDays=0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    }
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total days : " +totalWorkingDays + "total hrs : "+totalEmpHrs + "Emp wage :" +empWage);



//UC-6
function calcDailyWage(empHrs) {
 return empHrs * WAGE_PER_HOUR ;
}

const MAX_HRS_IN_MONTH =160;
const NUM_OF_WORKING_DAYS =20;
let totalEmpHrs =0;
let totalWorkingDays=0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS ) {
totalWorkingDays++ ;


let empCheck = Math.floor(Math.random() * 10) %3 ;
let empHrs =getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
}

let emmpWage = calcDailyWage(totalEmpHrs);
console.log("UC-6 TOTAL DAYS :" +totalWorkingDays + "Total Hrs: " +totalEmpHrs + "Emp Wage" +empWage );


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
