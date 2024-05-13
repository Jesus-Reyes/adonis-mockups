'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {

      table.increments()
      table.string('sa_user', 80).notNullable().unique()
      table.string('sa_name_pat', 80).notNullable()
      table.string('sa_name_mat', 80).notNullable()
      table.string('sa_name_nom', 80).notNullable()
      table.string('sa_mail', 254).notNullable().unique()
      table.string('password', 60)
      table.string('sa_cel', 80).notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
