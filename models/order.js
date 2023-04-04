'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Order.belongsTo(models.Event, {
        foreignKey: 'event_id',
        as: 'events',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Order.init(
    {
      name: DataTypes.STRING,
      cardNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      // price: DataTypes.STRING,
      // ticketCount: DataTypes.INTEGER,
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
      modelName: 'Order',
      tableName: 'orders'
    }
  )
  return Order
}
