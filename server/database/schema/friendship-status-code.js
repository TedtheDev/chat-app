const Sequelize = require('sequelize');
const Model = Sequelize.Model

class FriendshipStatusCode extends Model {};

const FriendshipStatusCodeSchema = (sequelize) => FriendshipStatusCode.init({
    // attributes
    statusCode: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
    },
  }, {
    // options
    sequelize,
    timestamps: false
  }
);

module.exports = FriendshipStatusCodeSchema;