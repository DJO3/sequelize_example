/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('addresses', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'addresses'
  })
}
