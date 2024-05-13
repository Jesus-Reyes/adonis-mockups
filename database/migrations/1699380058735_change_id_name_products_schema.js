'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChangeIdNameProductsSchema extends Schema {
  up() {
    // this.alter('products', (table) => {
    //   // Cambiar el nombre del campo "id" a "nuevo_id"
    //   table.renameColumn('id', 'sa_id');
    // });
  }

  down() {
    // this.alter('products', (table) => {
    //   // Cambiar el nombre del campo "nuevo_id" de vuelta a "id"
    //   table.renameColumn('sa_id', 'id');
    // });
  }
}

module.exports = ChangeIdNameProductsSchema
