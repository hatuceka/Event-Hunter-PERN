'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.hasOne(models.Order, {
        foreignKey: 'event_id',
        as: 'events',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Event.init(
    {
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      dateTime: DataTypes.DATE,
      location: DataTypes.STRING
      // order_id: {
      //   type: DataTypes.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'orders',
      //     key: 'id'
      //   }
      // }
      //isSoldOut: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
