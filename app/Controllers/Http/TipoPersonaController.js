'use strict'

const TipoPersona = use('App/Models/TipoPersona')

class TipoPersonaController {
  async index({ response }) {
    const tipos = await TipoPersona.all()
    return response.json(tipos)
  }
}

module.exports = TipoPersonaController
