// burger table model
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    // timestamps: false,
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false, //notNull: true,
      validate: {
        len: [1,100]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burgers;
};


// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });