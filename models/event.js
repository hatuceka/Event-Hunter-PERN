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
      Event.hasOne(models.Ticket, {
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
      location: DataTypes.STRING,
      isSoldOut: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
