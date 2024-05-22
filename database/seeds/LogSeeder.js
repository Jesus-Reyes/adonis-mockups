'use strict'

/*
|--------------------------------------------------------------------------
| LogSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Log = use('App/Models/Log')

class LogSeeder {
  async run() {
    await Log.createMany([
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": -11,
        "hora": "23:12:56",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": -11,
        "hora": "23:13:03",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:13:06",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:13:18",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:13:19",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:13:19",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:13:30",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:13:32",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:13:32",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:13:43",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:13:44",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:13:44",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:13:55",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:13:57",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:13:57",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:14:08",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:14:10",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:14:10",
        "alias": "codigo HMAC"
      },
      {
        "endpoint": "/UnM7Fl9BcM",
        "status": 200,
        "hora": "23:14:21",
        "alias": "validacion de estado"
      },
      {
        "endpoint": "/c71p0k33n",
        "status": 200,
        "hora": "23:14:22",
        "alias": "tipo de token"
      },
      {
        "endpoint": "/637s4dRT2o",
        "status": 200,
        "hora": "23:14:23",
        "alias": "codigo HMAC"
      }
    ])
  }
}

module.exports = LogSeeder
