//UC-11
let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0).reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsWage.dailyWage,0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0).reduce((totalHours,dailyHrsAndWage) =>totalHours += dailyHrsAndWage.dailyHours,0);
console.log("UC 11A total hours : " +totalHours+ "Total wages " +totalWages);

process.stdout.write("UC 11B logging full work days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==8).forEach(dailyHrsAndWge => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==4),map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\n UC 11C PartWorkingDayStrings : " +partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0).map(dailyHrsAndWage =>dailyHrsAndWage.dayNum);

console.log("NonWorkingDayNums : " +nonWorkingDayNums);


//Employee payroll class
class EmployeePayrollData {
//property
id;
salary;

//construtor
constructor(id , name, salary) v{
 this.id=id;
 this.name=name;
 this.salary=saalry;
}

//getter and setter method
get name() { return this._name;}
set name(name) {this._name = name; }

//method
toString() {
 return "id=" +this.id + "name=" +this.name + "salary=" +this.salary;
}
}
let employeePayrollDATA = new EmployeePayrollData(),"Aanchal",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";
console.log(employeePayrollData.toString());
