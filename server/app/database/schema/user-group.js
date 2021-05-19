const Sequelize = require('sequelize');
const Model = Sequelize.Model

class UserGroup extends Model {};

const UserGroupSchema = (sequelize) => UserGroup.init({
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    groupId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }, {
    // options
    sequelize,
    timestamps: true,
  }
);

module.exports = UserGroupSchema;