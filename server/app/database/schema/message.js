const Sequelize = require('sequelize');
const Model = Sequelize.Model

class Message extends Model {};

const MessageSchema = (sequelize) => Message.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    messageBody: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    parentMessageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
  }, {
    // options
    sequelize,
    timestamps: false
  }
);

module.exports = MessageSchema;