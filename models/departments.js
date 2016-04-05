/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'departments',
    timestamps: false
  })
}
