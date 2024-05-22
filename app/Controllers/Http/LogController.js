'use strict'

const Log = use('App/Models/Log')

class LogController {
    
  async index({ response }) {
    const logs = await Log.all()
    return response.json(logs)
  }

  async store({ request, response }) {

    console.log(request);
    const data = request.only(['endpoint', 'alias', 'status',  'hora'])
    const log = await Log.create(data)
    return response.status(201).json(log)
  }
}

module.exports = LogController
