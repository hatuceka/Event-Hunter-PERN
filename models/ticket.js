'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Ticket.belongsTo(models.Event, {
        foreignKey: 'event_id',
        as: 'events',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Ticket.init(
    {
      price: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      event_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'tickets'
    }
  )
  return Ticket
}
