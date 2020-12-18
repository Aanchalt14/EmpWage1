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

