const Sequelize = require('sequelize');
const Model = Sequelize.Model

class FriendshipStatus extends Model {};

const FriendshipStatusSchema = (sequelize) => FriendshipStatus.init({
    // attributes
    requesterId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    addresseeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    specifiedDateTime: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
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