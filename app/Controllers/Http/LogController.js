'use strict'

const Log = use('App/Models/Log')

class LogController {

  async index({ request, response }) {
    const timeFilter = request.input('time', 'all');
    const query = Log.query();
    this.applyTimeFilter(query, timeFilter); // Aplica el filtro de tiempo
    const logs = await query.fetch();
    return response.json(logs);
  }

  async store({ request, response }) {

    console.log(request);
    const data = request.only(['endpoint', 'alias', 'status', 'hora'])
    const log = await Log.create(data)
    return response.status(201).json(log)
  }


  // En tu controlador de Logs

  async totalEndpoints({ response }) {
    const logs = await Log.query()
      .select('endpoint', 'alias')
      .orderBy('created_at', 'desc')  // Asegurarse de que el más reciente esté primero
      .fetch();

    const logsJson = logs.toJSON();

    // Utilizar un Map para mantener solo el último alias de cada endpoint
    const endpointMap = new Map();
    logsJson.forEach(log => {
      if (!endpointMap.has(log.endpoint)) {
        endpointMap.set(log.endpoint, log.alias);
      }
    });

    // Convertir el Map a un array de objetos para la respuesta
    const endpoints = Array.from(endpointMap).map(([endpoint, alias]) => ({ endpoint, alias }));

    return response.json(endpoints);
  }


  // En tu controlador de Logs

  async countByEndpoint({ request, response }) {
    const endpoint = request.input('endpoint');
    const timeFilter = request.input('time', 'all');

    const query = Log.query()
      .where('endpoint', endpoint)
      .select('hora', 'status', 'id')
      .orderBy('created_at', 'desc');

    this.applyTimeFilter(query, timeFilter); // Aplica el filtro de tiempo
    const logs = await query.fetch();
    return response.json(logs);
  }

  // En tu controlador de Logs

  async countSuccessFail({ request, response }) {


    // Definir lo que consideras una petición exitosa o fallida
    const successStatus = [200]; // Lista de códigos de estado considerados como exitosos
    const failedStatus = [401, -11]; // Lista de códigos de estado considerados como fallidos

    const endpoint = request.input('endpoint'); // Asumimos que el endpoint se pasa como parámetro
    const timeFilter = request.input('time', 'all');


    const query = Log.query()
      .where('endpoint', endpoint)
      .orderBy('created_at', 'desc');
    this.applyTimeFilter(query, timeFilter); // Aplica el filtro de tiempo
    const logs = await query.fetch();
    const logsJson = logs.toJSON();


    const success = logsJson.filter(log => successStatus.includes(log.status)).length;
    const failed = logsJson.filter(log => failedStatus.includes(log.status)).length;

    return response.json({ success, failed });
  }





  applyTimeFilter(query, timeFilter) {
    const now = new Date();
    let lowerLimit;

    switch (timeFilter) {
      case '24h':
        lowerLimit = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        query.where('created_at', '>=', lowerLimit).where('created_at', '<=', now);
        break;
      case '1w':
        console.log(`FIlter TIME ${timeFilter}`);
        lowerLimit = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        console.log(`Lower : ${lowerLimit}`);
        console.log(`Now : ${now}`);
        query.where('created_at', '>=', lowerLimit.toISOString()).where('created_at', '<=', now.toISOString());
        break;
      case 'all':
        // No se aplica ningún filtro
        break;
      default:
        // Podrías manejar casos inesperados aquí
        break;
    }
  }

}

module.exports = LogController
