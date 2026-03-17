let employees=[];
function addEmployee()
{
    let name = document.getElementById("name").value;
    let empID = document.getElementById("empID").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if(name==="" || empID==="" || isNaN(salary) || debt==="") {
        alert("Please fill in all fields correctly.");
        return;
    }
    let employee = {
        name: name,
        empID: empID,
        salary: salary,
        dept: dept
    };
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}
function displayEmployees()
{
    let output = "<h2>Employee List</h2>";
    employees.forEach(emp => {
        output += `<p>Name: ${emp.name}, ID: ${emp.empID}, Salary: ${emp.salary}, Department: ${emp.dept}</p>`;
    });
}
