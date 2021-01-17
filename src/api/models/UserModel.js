module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    name: DataTypes.STRING(30),
    lastName: DataTypes.STRING(70),

  }, {
    tableName: 'users',
  });
  // users.associate = function (models) {
  //   // users.hasMany(models.address, {foreignKey: 'user_id',as: 'addresss'})
  // };
  return User;
};
