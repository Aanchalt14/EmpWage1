//UC-12
class EmployeePayrollData {
//property
id;
salary;
gender;
startDate;

//constructor
constructor(...params) {
 this.id=params[0];
 this.name=params[1];
 this.salary=params[2];
 this.gender=params[3];
 this.startDate=params[4];
}

//getter and setter method
get name() {return this._name; }
set name(name) {this._name = name; }

//method
toString() {
 const options = { year: 'numeric' , month : 'long' , day: 'numeric' };
const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocalDateString("en-US" , options);

return "id=" +this.id + "name=" +this.name+ "salary=" +this.sa;lary + "," +"gender=" +this.gender + ", startDate=" +empDate;
}
}
let emplyeePayrollData = new EmployeePayrollData(1,"Aanchal",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1,"ROSY" , 40000,"F" , new Date());
console.log(newEmployeePayrollData.toString());
