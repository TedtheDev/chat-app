const Sequelize = require('sequelize');
const Model = Sequelize.Model

class Friendship extends Model {};

const FriendshipSchema = (sequelize) => Friendship.init({
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
  }, {
    // options
    sequelize,
    timestamps: false
  }
);

module.exports = FriendshipSchema;