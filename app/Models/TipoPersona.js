'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoPersona extends Model {
  // Especifica el nombre de la tabla si es diferente al nombre del modelo en plural
  static get table() {
    return 'create_tipo_personas'
  }

  // Si tienes timestamps (created_at y updated_at) en tu tabla, asegúrate de incluir estas líneas
  static get createdAtColumn() {
    return 'created_at'
  }

  static get updatedAtColumn() {
    return 'updated_at'
  }

  // Definir las propiedades que se corresponden con las columnas en la base de datos
  static get columns() {
    return ['id', 'tipo']
  }
}

module.exports = TipoPersona
