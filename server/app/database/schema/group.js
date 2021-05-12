const Sequelize = require('sequelize');
const Model = Sequelize.Model

class Group extends Model {};

const GroupSchema = (sequelize) => Group.init({
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isActive: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    // options
    sequelize,
    timestamps: true,
  }
);

module.exports = GroupSchema;