'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTipoPersonaSchema extends Schema {
  up () {
    this.create('create_tipo_personas', (table) => {
      table.increments()
      table.string('tipo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_tipo_personas')
  }
}

module.exports = CreateTipoPersonaSchema
