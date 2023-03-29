'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      dateTime: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      // order_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   field: 'order_id',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'orders',
      //     key: 'id'
      //   }
      // },
      // isSoldOut: {
      //   type: Sequelize.BOOLEAN
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events')
  }
}
