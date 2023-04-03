'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // price: {
      //   type: Sequelize.STRING
      // },
      // ticketCount: {
      //   type: Sequelize.INTEGER
      // },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'event_id',
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id'
        }
      },
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
    await queryInterface.dropTable('orders')
  }
}
