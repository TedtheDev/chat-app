const Sequelize = require('sequelize');
const Model = Sequelize.Model

class User extends Model {};

const UserSchema = (sequelize) => User.init({
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    // options
    sequelize,
    timestamps: true,
  }
);

module.exports = UserSchema;