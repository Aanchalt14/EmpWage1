class EmployeePayrollData {
//property
id;
salary;
gender;
startDate;

//constructor
constructor(...params) {
 this.id=params[0];
 this.name=prams[1];
 this.salary=params[2];
 this.gender=params[3];
 this.startDate=params[4];
}

//getter and setter method
get name() { return this._name ;}
set name(name) {
 let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
 if(nameRegex.test(name))
  this._name=name;
  else throw 'Nmae is incorrect";
}

//method
toString() {
 const options = { year: 'numeric' , month 'long' , day: 'numeric'};
 const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US" , options );
 return "id" +this.id + "name" +this.name + "salary=" +this.salary+ "," + "gender" +this.gender + "startDate" +empDate;
}
}

let employeePayrollData = new  EmployeePayrollData (1,"mark" ,50000);
console.log(employeePayrollData.toString());
try {
  employeePayrollData.name="john";
  console.log(employeePayrollData.toString());
} catch(e) {
 console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData (1,"rosy" , 40000 , "f", new Date());
console.log(newEmployeePayrollData.toString());
