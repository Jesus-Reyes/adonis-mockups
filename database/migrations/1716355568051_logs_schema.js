'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LogsSchema extends Schema {
  up () {
    this.create('logs', (table) => {
      table.increments()
      table.string('endpoint', 255).notNullable()
      table.string('alias', 255).notNullable()
      table.integer('status').notNullable()
      table.string('hora')

      table.timestamps()
    })
  }

  down () {
    this.drop('logs')
  }
}

module.exports = LogsSchema
