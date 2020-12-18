//UC-10 object creation

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)  {
totalWorkingDays++ ;
let empCheck = Math.floor(Math.random() * 10) %3 ;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs += empHrs ;
empDailyHrsAndWageArr.push{
{
  dayNum : totalWorkingDays,
  dailyHours :empHrs,
  dailyWage : calcDailyWage(empHrs),
  toString() {
     return '\nDay' +this.dayNum + '=> working hours is ' +this.dailyHours + 'and wage earned =' +this.dailyWage
    },
 }};
}
console.log("UC-10 showing daily hours and wages earned " +empDailyHrsAndWageArr);
