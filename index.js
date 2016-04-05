// Initialize sequelize, import Employees table
var Sequelize = require('Sequelize')
var sequelize = new Sequelize('mysql://dave:password@localhost:3306/test_db')
var Employees = sequelize.import(__dirname + '/models/employees.js')

/*
Inserting
*/

// Create an employee
sequelize.sync().then(function () {
  return Employees.create({
    employee_name: 'Dr. Horrible',
    employee_dept: 1
  })
})

/*
Querying
*/

// Find by id
Employees.findById(1).then(function (employee) {
  console.log(employee.employee_name)
})

// Find one employee_name
Employees.findOne().then(function (employee) {
  console.log(employee.employee_name)
})

// Find employee where employee_name = 'Professor Oak'
Employees.findOne({
  where: {employee_name: 'Professor Oak'}
}).then(function (employee) {
  console.log(employee)
})

// Find employee by attributes
Employees.findOne({
  where: {employee_name: 'Professor Oak'},
  attributes: ['employee_id', ['employee_name', 'employee_dept']]
}).then(function (employee) {
  console.log(employee)
})

// Find all employees
Employees.findAll().then(function (employees) {
  console.log(employees)
})

// Count
Employees.count({
  where: ['employee_id <= ?', 1]
}).then(function (c) {
  console.log('Found ' + c + ' employee_id\'s')
})
