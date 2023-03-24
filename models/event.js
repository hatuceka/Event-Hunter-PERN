'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
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
      isSoldOut: DataTypes.BOOLEAN,
      ticketId: INTEGER
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
