const Sequelize = require('sequelize');
const Model = Sequelize.Model

class FriendshipStatus extends Model {};

const FriendshipStatusSchema = (sequelize) => FriendshipStatus.init({
    // attributes
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    requesterId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // unique: "friendshipStatusId",
    },
    addresseeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique: "friendshipStatusId",
    },
    specifiedDateTime: {
        type: Sequelize.DATE,
        allowNull: false,
        // unique: "friendshipStatusId",
    },
    statusCode: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
    },
    specifierId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
  }, {
    // options
    sequelize,
    timestamps: false
  }
);

module.exports = FriendshipStatusSchema;