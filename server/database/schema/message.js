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
    creator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    message_body: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    created_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    parent_message_id: {
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