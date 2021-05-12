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
    recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    recipient_group_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    message_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    is_read: {
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