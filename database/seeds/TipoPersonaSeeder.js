'use strict'

/*
|--------------------------------------------------------------------------
| TipoPersonaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TipoPersona = use('App/Models/TipoPersona')

class TipoPersonaSeeder {
  async run () {

    await TipoPersona.createMany([
      { tipo: 'Física' },
      { tipo: 'Moral' }
    ])
  }
}

module.exports = TipoPersonaSeeder
