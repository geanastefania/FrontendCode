var employeesList=[
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {   firstName: 'David',
        lastName: 'Gerard',
        phone: '1234153',
        salary: 4500

    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Stefi',
        lastName: 'Geana',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList(){
    var myTable= '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th></tr>';
    for(var i in employeesList) {
        myTable+=
            '<tr><td>'+employeesList[1].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="vizualizare()">vizualizare</button></td><td> stergere</td></tr>';
    }
    myTable+='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
var Employee = function(firstName, lastName, phone, salary)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
 function addEmployee(){
     var firstName =  document.getElementById("firstName").value;
     var lastName = document.getElementById("lastName").value;
     var phone = document.getElementById("phone").value;
     var salary = document.getElementById("salary").value;
     employeesList.push(new Employee(firstName, lastName, phone, salary ));
     
 }