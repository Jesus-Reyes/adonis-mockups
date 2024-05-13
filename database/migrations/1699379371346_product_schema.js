'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {

      table.increments()
      table.integer('sa_id').unsigned().references('id').inTable('users')
      table.string('product_name')
      table.string('product_control_id')
      table.string('product_user')
      table.string('product_pass')
      table.string('product_mail')
      table.string('product_cel')
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
