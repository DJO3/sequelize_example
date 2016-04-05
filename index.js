// Initialize sequelize, import Employees table
var Sequelize = require('Sequelize')
var sequelize = new Sequelize('mysql://dave:password@localhost:3306/test_db')
var Employees = sequelize.import(__dirname + '/models/employees.js')

// Find one employee_name
Employees.findOne().then(function (employee) {
  console.log(employee.employee_name)
})
