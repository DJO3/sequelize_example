/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('employees', {
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employee_dept: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    tableName: 'employees',
    timestamps: false
  })
}
