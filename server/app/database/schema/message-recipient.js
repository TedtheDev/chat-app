const Sequelize = require('sequelize');
const Model = Sequelize.Model

class MessageRecipient extends Model {};

const MessageRecipientSchema = (sequelize) => MessageRecipient.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    recipientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    recipientGroupId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    messageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    isRead: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
  }, {
    // options
    sequelize,
    timestamps: false
  }
);

module.exports = MessageRecipientSchema;