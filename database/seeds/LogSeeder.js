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
        "id": 1,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:15:18",
        "created_at": "2024-05-23 15:15:18",
        "updated_at": "2024-05-23 15:15:18"
      },
      {
        "id": 2,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "09:15:24",
        "created_at": "2024-05-23 15:15:25",
        "updated_at": "2024-05-23 15:15:25"
      },
      {
        "id": 3,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:15:29",
        "created_at": "2024-05-23 15:15:30",
        "updated_at": "2024-05-23 15:15:30"
      },
      {
        "id": 4,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:15:31",
        "created_at": "2024-05-23 15:15:31",
        "updated_at": "2024-05-23 15:15:31"
      },
      {
        "id": 5,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:15:33",
        "created_at": "2024-05-23 15:15:33",
        "updated_at": "2024-05-23 15:15:33"
      },
      {
        "id": 6,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:16:24",
        "created_at": "2024-05-23 15:16:25",
        "updated_at": "2024-05-23 15:16:25"
      },
      {
        "id": 7,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:30:20",
        "created_at": "2024-05-23 15:16:28",
        "updated_at": "2024-05-23 15:16:28"
      },
      {
        "id": 8,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:16:28",
        "created_at": "2024-05-23 15:16:29",
        "updated_at": "2024-05-23 15:16:29"
      },
      {
        "id": 9,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:16:30",
        "created_at": "2024-05-23 15:16:31",
        "updated_at": "2024-05-23 15:16:31"
      },
      {
        "id": 10,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:16:32",
        "created_at": "2024-05-23 15:16:32",
        "updated_at": "2024-05-23 15:16:32"
      },
      {
        "id": 11,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:17:23",
        "created_at": "2024-05-23 15:17:24",
        "updated_at": "2024-05-23 15:17:24"
      },
      {
        "id": 12,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:17:25",
        "created_at": "2024-05-23 15:17:26",
        "updated_at": "2024-05-23 15:17:26"
      },
      {
        "id": 13,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:17:26",
        "created_at": "2024-05-23 15:17:27",
        "updated_at": "2024-05-23 15:17:27"
      },
      {
        "id": 14,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:17:27",
        "created_at": "2024-05-23 15:17:28",
        "updated_at": "2024-05-23 15:17:28"
      },
      {
        "id": 15,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:17:29",
        "created_at": "2024-05-23 15:17:30",
        "updated_at": "2024-05-23 15:17:30"
      },
      {
        "id": 16,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "09:19:39",
        "created_at": "2024-05-23 15:19:39",
        "updated_at": "2024-05-23 15:19:39"
      },
      {
        "id": 17,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "09:19:46",
        "created_at": "2024-05-23 15:19:48",
        "updated_at": "2024-05-23 15:19:48"
      },
      {
        "id": 18,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:19:51",
        "created_at": "2024-05-23 15:19:52",
        "updated_at": "2024-05-23 15:19:52"
      },
      {
        "id": 19,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:19:52",
        "created_at": "2024-05-23 15:19:53",
        "updated_at": "2024-05-23 15:19:53"
      },
      {
        "id": 20,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:19:54",
        "created_at": "2024-05-23 15:19:55",
        "updated_at": "2024-05-23 15:19:55"
      },
      {
        "id": 21,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:20:46",
        "created_at": "2024-05-23 15:20:46",
        "updated_at": "2024-05-23 15:20:46"
      },
      {
        "id": 22,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:20:47",
        "created_at": "2024-05-23 15:20:48",
        "updated_at": "2024-05-23 15:20:48"
      },
      {
        "id": 23,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:20:48",
        "created_at": "2024-05-23 15:20:49",
        "updated_at": "2024-05-23 15:20:49"
      },
      {
        "id": 24,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:20:50",
        "created_at": "2024-05-23 15:20:51",
        "updated_at": "2024-05-23 15:20:51"
      },
      {
        "id": 25,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:20:52",
        "created_at": "2024-05-23 15:20:52",
        "updated_at": "2024-05-23 15:20:52"
      },
      {
        "id": 26,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:21:43",
        "created_at": "2024-05-23 15:21:44",
        "updated_at": "2024-05-23 15:21:44"
      },
      {
        "id": 27,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:31:21",
        "created_at": "2024-05-23 15:21:46",
        "updated_at": "2024-05-23 15:21:46"
      },
      {
        "id": 28,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:21:47",
        "created_at": "2024-05-23 15:21:48",
        "updated_at": "2024-05-23 15:21:48"
      },
      {
        "id": 29,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:21:49",
        "created_at": "2024-05-23 15:21:49",
        "updated_at": "2024-05-23 15:21:49"
      },
      {
        "id": 30,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:21:50",
        "created_at": "2024-05-23 15:21:51",
        "updated_at": "2024-05-23 15:21:51"
      },
      {
        "id": 31,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:22:42",
        "created_at": "2024-05-23 15:22:42",
        "updated_at": "2024-05-23 15:22:42"
      },
      {
        "id": 32,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:22:44",
        "created_at": "2024-05-23 15:22:45",
        "updated_at": "2024-05-23 15:22:45"
      },
      {
        "id": 33,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:22:45",
        "created_at": "2024-05-23 15:22:46",
        "updated_at": "2024-05-23 15:22:46"
      },
      {
        "id": 34,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:22:48",
        "created_at": "2024-05-23 15:22:49",
        "updated_at": "2024-05-23 15:22:49"
      },
      {
        "id": 35,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:22:50",
        "created_at": "2024-05-23 15:22:51",
        "updated_at": "2024-05-23 15:22:51"
      },
      {
        "id": 36,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:23:41",
        "created_at": "2024-05-23 15:23:42",
        "updated_at": "2024-05-23 15:23:42"
      },
      {
        "id": 37,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:23:44",
        "created_at": "2024-05-23 15:23:45",
        "updated_at": "2024-05-23 15:23:45"
      },
      {
        "id": 38,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:23:46",
        "created_at": "2024-05-23 15:23:47",
        "updated_at": "2024-05-23 15:23:47"
      },
      {
        "id": 39,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:23:48",
        "created_at": "2024-05-23 15:23:49",
        "updated_at": "2024-05-23 15:23:49"
      },
      {
        "id": 40,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:23:50",
        "created_at": "2024-05-23 15:23:51",
        "updated_at": "2024-05-23 15:23:51"
      },
      {
        "id": 41,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:34:18",
        "created_at": "2024-05-23 15:24:43",
        "updated_at": "2024-05-23 15:24:43"
      },
      {
        "id": 42,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:34:20",
        "created_at": "2024-05-23 15:24:45",
        "updated_at": "2024-05-23 15:24:45"
      },
      {
        "id": 43,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:34:24",
        "created_at": "2024-05-23 15:24:49",
        "updated_at": "2024-05-23 15:24:49"
      },
      {
        "id": 44,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:34:26",
        "created_at": "2024-05-23 15:24:51",
        "updated_at": "2024-05-23 15:24:51"
      },
      {
        "id": 45,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "00:34:28",
        "created_at": "2024-05-23 15:24:54",
        "updated_at": "2024-05-23 15:24:54"
      },
      {
        "id": 46,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:35:20",
        "created_at": "2024-05-23 15:25:46",
        "updated_at": "2024-05-23 15:25:46"
      },
      {
        "id": 47,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:35:23",
        "created_at": "2024-05-23 15:25:49",
        "updated_at": "2024-05-23 15:25:49"
      },
      {
        "id": 48,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:35:25",
        "created_at": "2024-05-23 15:25:51",
        "updated_at": "2024-05-23 15:25:51"
      },
      {
        "id": 49,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:35:28",
        "created_at": "2024-05-23 15:25:53",
        "updated_at": "2024-05-23 15:25:53"
      },
      {
        "id": 50,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:25:54",
        "created_at": "2024-05-23 15:25:55",
        "updated_at": "2024-05-23 15:25:55"
      },
      {
        "id": 51,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:26:45",
        "created_at": "2024-05-23 15:26:46",
        "updated_at": "2024-05-23 15:26:46"
      },
      {
        "id": 52,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:26:47",
        "created_at": "2024-05-23 15:26:48",
        "updated_at": "2024-05-23 15:26:48"
      },
      {
        "id": 53,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:26:48",
        "created_at": "2024-05-23 15:26:49",
        "updated_at": "2024-05-23 15:26:49"
      },
      {
        "id": 54,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:26:49",
        "created_at": "2024-05-23 15:26:50",
        "updated_at": "2024-05-23 15:26:50"
      },
      {
        "id": 55,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:26:52",
        "created_at": "2024-05-23 15:26:52",
        "updated_at": "2024-05-23 15:26:52"
      },
      {
        "id": 56,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:37:22",
        "created_at": "2024-05-23 15:27:47",
        "updated_at": "2024-05-23 15:27:47"
      },
      {
        "id": 57,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:27:49",
        "created_at": "2024-05-23 15:27:50",
        "updated_at": "2024-05-23 15:27:50"
      },
      {
        "id": 58,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:37:26",
        "created_at": "2024-05-23 15:27:52",
        "updated_at": "2024-05-23 15:27:52"
      },
      {
        "id": 59,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:37:28",
        "created_at": "2024-05-23 15:27:54",
        "updated_at": "2024-05-23 15:27:54"
      },
      {
        "id": 60,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:27:55",
        "created_at": "2024-05-23 15:27:55",
        "updated_at": "2024-05-23 15:27:55"
      },
      {
        "id": 61,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:38:22",
        "created_at": "2024-05-23 15:28:47",
        "updated_at": "2024-05-23 15:28:47"
      },
      {
        "id": 62,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:38:25",
        "created_at": "2024-05-23 15:28:50",
        "updated_at": "2024-05-23 15:28:50"
      },
      {
        "id": 63,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:38:27",
        "created_at": "2024-05-23 15:28:52",
        "updated_at": "2024-05-23 15:28:52"
      },
      {
        "id": 64,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:28:52",
        "created_at": "2024-05-23 15:28:54",
        "updated_at": "2024-05-23 15:28:54"
      },
      {
        "id": 65,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:28:55",
        "created_at": "2024-05-23 15:28:55",
        "updated_at": "2024-05-23 15:28:55"
      },
      {
        "id": 66,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:29:46",
        "created_at": "2024-05-23 15:29:47",
        "updated_at": "2024-05-23 15:29:47"
      },
      {
        "id": 67,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:29:48",
        "created_at": "2024-05-23 15:29:48",
        "updated_at": "2024-05-23 15:29:48"
      },
      {
        "id": 68,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:29:49",
        "created_at": "2024-05-23 15:29:50",
        "updated_at": "2024-05-23 15:29:50"
      },
      {
        "id": 69,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:29:50",
        "created_at": "2024-05-23 15:29:51",
        "updated_at": "2024-05-23 15:29:51"
      },
      {
        "id": 70,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:29:52",
        "created_at": "2024-05-23 15:29:52",
        "updated_at": "2024-05-23 15:29:52"
      },
      {
        "id": 71,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:30:43",
        "created_at": "2024-05-23 15:30:44",
        "updated_at": "2024-05-23 15:30:44"
      },
      {
        "id": 72,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:30:46",
        "created_at": "2024-05-23 15:30:46",
        "updated_at": "2024-05-23 15:30:46"
      },
      {
        "id": 73,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:30:48",
        "created_at": "2024-05-23 15:30:48",
        "updated_at": "2024-05-23 15:30:48"
      },
      {
        "id": 74,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:30:48",
        "created_at": "2024-05-23 15:30:49",
        "updated_at": "2024-05-23 15:30:49"
      },
      {
        "id": 75,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:30:51",
        "created_at": "2024-05-23 15:30:51",
        "updated_at": "2024-05-23 15:30:51"
      },
      {
        "id": 76,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:31:42",
        "created_at": "2024-05-23 15:31:42",
        "updated_at": "2024-05-23 15:31:42"
      },
      {
        "id": 77,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:31:44",
        "created_at": "2024-05-23 15:31:44",
        "updated_at": "2024-05-23 15:31:44"
      },
      {
        "id": 78,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:31:45",
        "created_at": "2024-05-23 15:31:46",
        "updated_at": "2024-05-23 15:31:46"
      },
      {
        "id": 79,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:31:48",
        "created_at": "2024-05-23 15:31:49",
        "updated_at": "2024-05-23 15:31:49"
      },
      {
        "id": 80,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:31:50",
        "created_at": "2024-05-23 15:31:51",
        "updated_at": "2024-05-23 15:31:51"
      },
      {
        "id": 81,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:32:42",
        "created_at": "2024-05-23 15:32:42",
        "updated_at": "2024-05-23 15:32:42"
      },
      {
        "id": 82,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:32:43",
        "created_at": "2024-05-23 15:32:44",
        "updated_at": "2024-05-23 15:32:44"
      },
      {
        "id": 83,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:42:21",
        "created_at": "2024-05-23 15:32:46",
        "updated_at": "2024-05-23 15:32:46"
      },
      {
        "id": 84,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:32:48",
        "created_at": "2024-05-23 15:32:49",
        "updated_at": "2024-05-23 15:32:49"
      },
      {
        "id": 85,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:32:50",
        "created_at": "2024-05-23 15:32:51",
        "updated_at": "2024-05-23 15:32:51"
      },
      {
        "id": 86,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:33:41",
        "created_at": "2024-05-23 15:33:42",
        "updated_at": "2024-05-23 15:33:42"
      },
      {
        "id": 87,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:33:43",
        "created_at": "2024-05-23 15:33:44",
        "updated_at": "2024-05-23 15:33:44"
      },
      {
        "id": 88,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:33:44",
        "created_at": "2024-05-23 15:33:45",
        "updated_at": "2024-05-23 15:33:45"
      },
      {
        "id": 89,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:33:45",
        "created_at": "2024-05-23 15:33:46",
        "updated_at": "2024-05-23 15:33:46"
      },
      {
        "id": 90,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:33:47",
        "created_at": "2024-05-23 15:33:48",
        "updated_at": "2024-05-23 15:33:48"
      },
      {
        "id": 91,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:35:39",
        "created_at": "2024-05-23 15:35:39",
        "updated_at": "2024-05-23 15:35:39"
      },
      {
        "id": 92,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:35:40",
        "created_at": "2024-05-23 15:35:44",
        "updated_at": "2024-05-23 15:35:44"
      },
      {
        "id": 93,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:35:44",
        "created_at": "2024-05-23 15:35:45",
        "updated_at": "2024-05-23 15:35:45"
      },
      {
        "id": 94,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:35:46",
        "created_at": "2024-05-23 15:35:47",
        "updated_at": "2024-05-23 15:35:47"
      },
      {
        "id": 95,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:35:48",
        "created_at": "2024-05-23 15:35:48",
        "updated_at": "2024-05-23 15:35:48"
      },
      {
        "id": 96,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:36:40",
        "created_at": "2024-05-23 15:36:40",
        "updated_at": "2024-05-23 15:36:40"
      },
      {
        "id": 97,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:36:42",
        "created_at": "2024-05-23 15:36:43",
        "updated_at": "2024-05-23 15:36:43"
      },
      {
        "id": 98,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:36:43",
        "created_at": "2024-05-23 15:36:44",
        "updated_at": "2024-05-23 15:36:44"
      },
      {
        "id": 99,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:36:45",
        "created_at": "2024-05-23 15:36:46",
        "updated_at": "2024-05-23 15:36:46"
      },
      {
        "id": 100,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:36:47",
        "created_at": "2024-05-23 15:36:48",
        "updated_at": "2024-05-23 15:36:48"
      },
      {
        "id": 101,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:37:40",
        "created_at": "2024-05-23 15:37:40",
        "updated_at": "2024-05-23 15:37:40"
      },
      {
        "id": 102,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:37:43",
        "created_at": "2024-05-23 15:37:43",
        "updated_at": "2024-05-23 15:37:43"
      },
      {
        "id": 103,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:37:43",
        "created_at": "2024-05-23 15:37:45",
        "updated_at": "2024-05-23 15:37:45"
      },
      {
        "id": 104,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:37:46",
        "created_at": "2024-05-23 15:37:47",
        "updated_at": "2024-05-23 15:37:47"
      },
      {
        "id": 105,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:37:48",
        "created_at": "2024-05-23 15:37:48",
        "updated_at": "2024-05-23 15:37:48"
      },
      {
        "id": 106,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:38:40",
        "created_at": "2024-05-23 15:38:40",
        "updated_at": "2024-05-23 15:38:40"
      },
      {
        "id": 107,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:38:41",
        "created_at": "2024-05-23 15:38:42",
        "updated_at": "2024-05-23 15:38:42"
      },
      {
        "id": 108,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:38:43",
        "created_at": "2024-05-23 15:38:44",
        "updated_at": "2024-05-23 15:38:44"
      },
      {
        "id": 109,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:38:44",
        "created_at": "2024-05-23 15:38:45",
        "updated_at": "2024-05-23 15:38:45"
      },
      {
        "id": 110,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:38:46",
        "created_at": "2024-05-23 15:38:47",
        "updated_at": "2024-05-23 15:38:47"
      },
      {
        "id": 111,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:39:39",
        "created_at": "2024-05-23 15:39:39",
        "updated_at": "2024-05-23 15:39:39"
      },
      {
        "id": 112,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:39:40",
        "created_at": "2024-05-23 15:39:41",
        "updated_at": "2024-05-23 15:39:41"
      },
      {
        "id": 113,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:39:43",
        "created_at": "2024-05-23 15:39:43",
        "updated_at": "2024-05-23 15:39:43"
      },
      {
        "id": 114,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:39:43",
        "created_at": "2024-05-23 15:39:45",
        "updated_at": "2024-05-23 15:39:45"
      },
      {
        "id": 115,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:39:46",
        "created_at": "2024-05-23 15:39:47",
        "updated_at": "2024-05-23 15:39:47"
      },
      {
        "id": 116,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:40:38",
        "created_at": "2024-05-23 15:40:39",
        "updated_at": "2024-05-23 15:40:39"
      },
      {
        "id": 117,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:40:41",
        "created_at": "2024-05-23 15:40:41",
        "updated_at": "2024-05-23 15:40:41"
      },
      {
        "id": 118,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:34:14",
        "created_at": "2024-05-23 15:40:44",
        "updated_at": "2024-05-23 15:40:44"
      },
      {
        "id": 119,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:40:45",
        "created_at": "2024-05-23 15:40:45",
        "updated_at": "2024-05-23 15:40:45"
      },
      {
        "id": 120,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:40:47",
        "created_at": "2024-05-23 15:40:47",
        "updated_at": "2024-05-23 15:40:47"
      },
      {
        "id": 121,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:41:38",
        "created_at": "2024-05-23 15:41:39",
        "updated_at": "2024-05-23 15:41:39"
      },
      {
        "id": 122,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:41:41",
        "created_at": "2024-05-23 15:41:41",
        "updated_at": "2024-05-23 15:41:41"
      },
      {
        "id": 123,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:41:42",
        "created_at": "2024-05-23 15:41:43",
        "updated_at": "2024-05-23 15:41:43"
      },
      {
        "id": 124,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:41:44",
        "created_at": "2024-05-23 15:41:44",
        "updated_at": "2024-05-23 15:41:44"
      },
      {
        "id": 125,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:41:45",
        "created_at": "2024-05-23 15:41:46",
        "updated_at": "2024-05-23 15:41:46"
      },
      {
        "id": 126,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:42:36",
        "created_at": "2024-05-23 15:42:38",
        "updated_at": "2024-05-23 15:42:38"
      },
      {
        "id": 127,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:42:39",
        "created_at": "2024-05-23 15:42:40",
        "updated_at": "2024-05-23 15:42:40"
      },
      {
        "id": 128,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:42:40",
        "created_at": "2024-05-23 15:42:41",
        "updated_at": "2024-05-23 15:42:41"
      },
      {
        "id": 129,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:42:41",
        "created_at": "2024-05-23 15:42:43",
        "updated_at": "2024-05-23 15:42:43"
      },
      {
        "id": 130,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:42:44",
        "created_at": "2024-05-23 15:42:44",
        "updated_at": "2024-05-23 15:42:44"
      },
      {
        "id": 131,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:43:39",
        "created_at": "2024-05-23 15:43:39",
        "updated_at": "2024-05-23 15:43:39"
      },
      {
        "id": 132,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:43:40",
        "created_at": "2024-05-23 15:43:41",
        "updated_at": "2024-05-23 15:43:41"
      },
      {
        "id": 133,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:43:41",
        "created_at": "2024-05-23 15:43:42",
        "updated_at": "2024-05-23 15:43:42"
      },
      {
        "id": 134,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:43:44",
        "created_at": "2024-05-23 15:43:44",
        "updated_at": "2024-05-23 15:43:44"
      },
      {
        "id": 135,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:43:45",
        "created_at": "2024-05-23 15:43:45",
        "updated_at": "2024-05-23 15:43:45"
      },
      {
        "id": 136,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:44:37",
        "created_at": "2024-05-23 15:44:37",
        "updated_at": "2024-05-23 15:44:37"
      },
      {
        "id": 137,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:44:38",
        "created_at": "2024-05-23 15:44:39",
        "updated_at": "2024-05-23 15:44:39"
      },
      {
        "id": 138,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:28:16",
        "created_at": "2024-05-23 15:44:41",
        "updated_at": "2024-05-23 15:44:41"
      },
      {
        "id": 139,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:38:15",
        "created_at": "2024-05-23 15:44:46",
        "updated_at": "2024-05-23 15:44:46"
      },
      {
        "id": 140,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:44:47",
        "created_at": "2024-05-23 15:44:48",
        "updated_at": "2024-05-23 15:44:48"
      },
      {
        "id": 141,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:45:39",
        "created_at": "2024-05-23 15:45:39",
        "updated_at": "2024-05-23 15:45:39"
      },
      {
        "id": 142,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:45:41",
        "created_at": "2024-05-23 15:45:41",
        "updated_at": "2024-05-23 15:45:41"
      },
      {
        "id": 143,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:45:43",
        "created_at": "2024-05-23 15:45:43",
        "updated_at": "2024-05-23 15:45:43"
      },
      {
        "id": 144,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:45:43",
        "created_at": "2024-05-23 15:45:45",
        "updated_at": "2024-05-23 15:45:45"
      },
      {
        "id": 145,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:45:46",
        "created_at": "2024-05-23 15:45:46",
        "updated_at": "2024-05-23 15:45:46"
      },
      {
        "id": 146,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:40:09",
        "created_at": "2024-05-23 15:46:40",
        "updated_at": "2024-05-23 15:46:40"
      },
      {
        "id": 147,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:40:12",
        "created_at": "2024-05-23 15:46:42",
        "updated_at": "2024-05-23 15:46:42"
      },
      {
        "id": 148,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:46:44",
        "created_at": "2024-05-23 15:46:44",
        "updated_at": "2024-05-23 15:46:44"
      },
      {
        "id": 149,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:40:16",
        "created_at": "2024-05-23 15:46:46",
        "updated_at": "2024-05-23 15:46:46"
      },
      {
        "id": 150,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "00:40:18",
        "created_at": "2024-05-23 15:46:48",
        "updated_at": "2024-05-23 15:46:48"
      },
      {
        "id": 151,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:47:40",
        "created_at": "2024-05-23 15:47:41",
        "updated_at": "2024-05-23 15:47:41"
      },
      {
        "id": 152,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:47:43",
        "created_at": "2024-05-23 15:47:44",
        "updated_at": "2024-05-23 15:47:44"
      },
      {
        "id": 153,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:41:16",
        "created_at": "2024-05-23 15:47:46",
        "updated_at": "2024-05-23 15:47:46"
      },
      {
        "id": 154,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:47:47",
        "created_at": "2024-05-23 15:47:48",
        "updated_at": "2024-05-23 15:47:48"
      },
      {
        "id": 155,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:47:49",
        "created_at": "2024-05-23 15:47:49",
        "updated_at": "2024-05-23 15:47:49"
      },
      {
        "id": 156,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "09:48:40",
        "created_at": "2024-05-23 15:48:41",
        "updated_at": "2024-05-23 15:48:41"
      },
      {
        "id": 157,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:48:43",
        "created_at": "2024-05-23 15:48:44",
        "updated_at": "2024-05-23 15:48:44"
      },
      {
        "id": 158,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:48:44",
        "created_at": "2024-05-23 15:48:45",
        "updated_at": "2024-05-23 15:48:45"
      },
      {
        "id": 159,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:48:45",
        "created_at": "2024-05-23 15:48:46",
        "updated_at": "2024-05-23 15:48:46"
      },
      {
        "id": 160,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:48:48",
        "created_at": "2024-05-23 15:48:48",
        "updated_at": "2024-05-23 15:48:48"
      },
      {
        "id": 161,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:43:10",
        "created_at": "2024-05-23 15:49:41",
        "updated_at": "2024-05-23 15:49:41"
      },
      {
        "id": 162,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:49:42",
        "created_at": "2024-05-23 15:49:43",
        "updated_at": "2024-05-23 15:49:43"
      },
      {
        "id": 163,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:49:43",
        "created_at": "2024-05-23 15:49:45",
        "updated_at": "2024-05-23 15:49:45"
      },
      {
        "id": 164,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:49:52",
        "created_at": "2024-05-23 15:49:53",
        "updated_at": "2024-05-23 15:49:53"
      },
      {
        "id": 165,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 502,
        "hora": "00:44:20",
        "created_at": "2024-05-23 15:50:51",
        "updated_at": "2024-05-23 15:50:51"
      },
      {
        "id": 166,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:44:35",
        "created_at": "2024-05-23 15:51:05",
        "updated_at": "2024-05-23 15:51:05"
      },
      {
        "id": 167,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "09:51:09",
        "created_at": "2024-05-23 15:51:12",
        "updated_at": "2024-05-23 15:51:12"
      },
      {
        "id": 168,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "09:51:14",
        "created_at": "2024-05-23 15:51:17",
        "updated_at": "2024-05-23 15:51:17"
      },
      {
        "id": 169,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:51:20",
        "created_at": "2024-05-23 15:51:20",
        "updated_at": "2024-05-23 15:51:20"
      },
      {
        "id": 170,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "00:45:49",
        "created_at": "2024-05-23 15:52:20",
        "updated_at": "2024-05-23 15:52:20"
      },
      {
        "id": 171,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "09:52:22",
        "created_at": "2024-05-23 15:52:23",
        "updated_at": "2024-05-23 15:52:23"
      },
      {
        "id": 172,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:45:56",
        "created_at": "2024-05-23 15:52:26",
        "updated_at": "2024-05-23 15:52:26"
      },
      {
        "id": 173,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "09:52:31",
        "created_at": "2024-05-23 15:52:37",
        "updated_at": "2024-05-23 15:52:37"
      },
      {
        "id": 174,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -1,
        "hora": "00:29:29",
        "created_at": "2024-05-23 15:53:57",
        "updated_at": "2024-05-23 15:53:57"
      },
      {
        "id": 175,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 200,
        "hora": "00:29:55",
        "created_at": "2024-05-23 15:55:37",
        "updated_at": "2024-05-23 15:55:37"
      },
      {
        "id": 176,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "09:55:37",
        "created_at": "2024-05-23 15:55:38",
        "updated_at": "2024-05-23 15:55:38"
      },
      {
        "id": 177,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "13:56:24",
        "created_at": "2024-05-23 19:56:25",
        "updated_at": "2024-05-23 19:56:25"
      },
      {
        "id": 178,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "13:56:32",
        "created_at": "2024-05-23 19:56:33",
        "updated_at": "2024-05-23 19:56:33"
      },
      {
        "id": 179,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "13:56:34",
        "created_at": "2024-05-23 19:56:35",
        "updated_at": "2024-05-23 19:56:35"
      },
      {
        "id": 180,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "13:56:35",
        "created_at": "2024-05-23 19:56:36",
        "updated_at": "2024-05-23 19:56:36"
      },
      {
        "id": 181,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "13:56:36",
        "created_at": "2024-05-23 19:56:37",
        "updated_at": "2024-05-23 19:56:37"
      },
      {
        "id": 182,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "13:57:28",
        "created_at": "2024-05-23 19:57:28",
        "updated_at": "2024-05-23 19:57:28"
      },
      {
        "id": 183,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "13:57:30",
        "created_at": "2024-05-23 19:57:32",
        "updated_at": "2024-05-23 19:57:32"
      },
      {
        "id": 184,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "13:57:32",
        "created_at": "2024-05-23 19:57:33",
        "updated_at": "2024-05-23 19:57:33"
      },
      {
        "id": 185,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "13:57:33",
        "created_at": "2024-05-23 19:57:34",
        "updated_at": "2024-05-23 19:57:34"
      },
      {
        "id": 186,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "13:57:35",
        "created_at": "2024-05-23 19:57:35",
        "updated_at": "2024-05-23 19:57:35"
      },
      {
        "id": 187,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "13:58:26",
        "created_at": "2024-05-23 19:58:27",
        "updated_at": "2024-05-23 19:58:27"
      },
      {
        "id": 188,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "13:58:30",
        "created_at": "2024-05-23 19:58:31",
        "updated_at": "2024-05-23 19:58:31"
      },
      {
        "id": 189,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "13:58:31",
        "created_at": "2024-05-23 19:58:32",
        "updated_at": "2024-05-23 19:58:32"
      },
      {
        "id": 190,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "13:58:33",
        "created_at": "2024-05-23 19:58:33",
        "updated_at": "2024-05-23 19:58:33"
      },
      {
        "id": 191,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "13:58:34",
        "created_at": "2024-05-23 19:58:34",
        "updated_at": "2024-05-23 19:58:34"
      },
      {
        "id": 192,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "13:59:29",
        "created_at": "2024-05-23 19:59:31",
        "updated_at": "2024-05-23 19:59:31"
      },
      {
        "id": 193,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "13:59:35",
        "created_at": "2024-05-23 19:59:36",
        "updated_at": "2024-05-23 19:59:36"
      },
      {
        "id": 194,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "13:59:41",
        "created_at": "2024-05-23 19:59:41",
        "updated_at": "2024-05-23 19:59:41"
      },
      {
        "id": 195,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "00:32:38",
        "created_at": "2024-05-23 19:59:46",
        "updated_at": "2024-05-23 19:59:46"
      },
      {
        "id": 196,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "13:59:46",
        "created_at": "2024-05-23 19:59:47",
        "updated_at": "2024-05-23 19:59:47"
      },
      {
        "id": 197,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "14:00:38",
        "created_at": "2024-05-23 20:00:39",
        "updated_at": "2024-05-23 20:00:39"
      },
      {
        "id": 198,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "00:33:35",
        "created_at": "2024-05-23 20:00:43",
        "updated_at": "2024-05-23 20:00:43"
      },
      {
        "id": 199,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "14:00:43",
        "created_at": "2024-05-23 20:00:44",
        "updated_at": "2024-05-23 20:00:44"
      },
      {
        "id": 200,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "14:00:44",
        "created_at": "2024-05-23 20:00:45",
        "updated_at": "2024-05-23 20:00:45"
      },
      {
        "id": 201,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "14:00:45",
        "created_at": "2024-05-23 20:00:45",
        "updated_at": "2024-05-23 20:00:45"
      },
      {
        "id": 202,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "15:30:39",
        "created_at": "2024-05-23 21:30:39",
        "updated_at": "2024-05-23 21:30:39"
      },
      {
        "id": 203,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "15:30:46",
        "created_at": "2024-05-23 21:30:47",
        "updated_at": "2024-05-23 21:30:47"
      },
      {
        "id": 204,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:30:49",
        "created_at": "2024-05-23 21:30:50",
        "updated_at": "2024-05-23 21:30:50"
      },
      {
        "id": 205,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:30:50",
        "created_at": "2024-05-23 21:30:51",
        "updated_at": "2024-05-23 21:30:51"
      },
      {
        "id": 206,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:30:51",
        "created_at": "2024-05-23 21:30:51",
        "updated_at": "2024-05-23 21:30:51"
      },
      {
        "id": 207,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:31:41",
        "created_at": "2024-05-23 21:31:42",
        "updated_at": "2024-05-23 21:31:42"
      },
      {
        "id": 208,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:31:43",
        "created_at": "2024-05-23 21:31:43",
        "updated_at": "2024-05-23 21:31:43"
      },
      {
        "id": 209,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:31:43",
        "created_at": "2024-05-23 21:31:44",
        "updated_at": "2024-05-23 21:31:44"
      },
      {
        "id": 210,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:31:44",
        "created_at": "2024-05-23 21:31:44",
        "updated_at": "2024-05-23 21:31:44"
      },
      {
        "id": 211,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:31:45",
        "created_at": "2024-05-23 21:31:45",
        "updated_at": "2024-05-23 21:31:45"
      },
      {
        "id": 212,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:32:35",
        "created_at": "2024-05-23 21:32:36",
        "updated_at": "2024-05-23 21:32:36"
      },
      {
        "id": 213,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:32:37",
        "created_at": "2024-05-23 21:32:37",
        "updated_at": "2024-05-23 21:32:37"
      },
      {
        "id": 214,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:32:37",
        "created_at": "2024-05-23 21:32:37",
        "updated_at": "2024-05-23 21:32:37"
      },
      {
        "id": 215,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:32:37",
        "created_at": "2024-05-23 21:32:38",
        "updated_at": "2024-05-23 21:32:38"
      },
      {
        "id": 216,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:32:38",
        "created_at": "2024-05-23 21:32:38",
        "updated_at": "2024-05-23 21:32:38"
      },
      {
        "id": 217,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "02:06:22",
        "created_at": "2024-05-23 21:33:30",
        "updated_at": "2024-05-23 21:33:30"
      },
      {
        "id": 218,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:33:31",
        "created_at": "2024-05-23 21:33:31",
        "updated_at": "2024-05-23 21:33:31"
      },
      {
        "id": 219,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "02:06:25",
        "created_at": "2024-05-23 21:33:33",
        "updated_at": "2024-05-23 21:33:33"
      },
      {
        "id": 220,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:33:33",
        "created_at": "2024-05-23 21:33:34",
        "updated_at": "2024-05-23 21:33:34"
      },
      {
        "id": 221,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:33:34",
        "created_at": "2024-05-23 21:33:34",
        "updated_at": "2024-05-23 21:33:34"
      },
      {
        "id": 222,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "02:07:18",
        "created_at": "2024-05-23 21:34:26",
        "updated_at": "2024-05-23 21:34:26"
      },
      {
        "id": 223,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "02:07:20",
        "created_at": "2024-05-23 21:34:28",
        "updated_at": "2024-05-23 21:34:28"
      },
      {
        "id": 224,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "02:07:22",
        "created_at": "2024-05-23 21:34:30",
        "updated_at": "2024-05-23 21:34:30"
      },
      {
        "id": 225,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:34:30",
        "created_at": "2024-05-23 21:34:30",
        "updated_at": "2024-05-23 21:34:30"
      },
      {
        "id": 226,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "02:07:24",
        "created_at": "2024-05-23 21:34:32",
        "updated_at": "2024-05-23 21:34:32"
      },
      {
        "id": 227,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:35:22",
        "created_at": "2024-05-23 21:35:22",
        "updated_at": "2024-05-23 21:35:22"
      },
      {
        "id": 228,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:35:23",
        "created_at": "2024-05-23 21:35:24",
        "updated_at": "2024-05-23 21:35:24"
      },
      {
        "id": 229,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:35:24",
        "created_at": "2024-05-23 21:35:24",
        "updated_at": "2024-05-23 21:35:24"
      },
      {
        "id": 230,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:35:24",
        "created_at": "2024-05-23 21:35:25",
        "updated_at": "2024-05-23 21:35:25"
      },
      {
        "id": 231,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:35:25",
        "created_at": "2024-05-23 21:35:25",
        "updated_at": "2024-05-23 21:35:25"
      },
      {
        "id": 232,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:36:55",
        "created_at": "2024-05-23 21:36:56",
        "updated_at": "2024-05-23 21:36:56"
      },
      {
        "id": 233,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:36:57",
        "created_at": "2024-05-23 21:36:57",
        "updated_at": "2024-05-23 21:36:57"
      },
      {
        "id": 234,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:36:57",
        "created_at": "2024-05-23 21:36:58",
        "updated_at": "2024-05-23 21:36:58"
      },
      {
        "id": 235,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:36:58",
        "created_at": "2024-05-23 21:36:58",
        "updated_at": "2024-05-23 21:36:58"
      },
      {
        "id": 236,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:36:59",
        "created_at": "2024-05-23 21:36:59",
        "updated_at": "2024-05-23 21:36:59"
      },
      {
        "id": 237,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:37:49",
        "created_at": "2024-05-23 21:37:50",
        "updated_at": "2024-05-23 21:37:50"
      },
      {
        "id": 238,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:37:51",
        "created_at": "2024-05-23 21:37:52",
        "updated_at": "2024-05-23 21:37:52"
      },
      {
        "id": 239,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:37:52",
        "created_at": "2024-05-23 21:37:52",
        "updated_at": "2024-05-23 21:37:52"
      },
      {
        "id": 240,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:37:53",
        "created_at": "2024-05-23 21:37:53",
        "updated_at": "2024-05-23 21:37:53"
      },
      {
        "id": 241,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:37:53",
        "created_at": "2024-05-23 21:37:54",
        "updated_at": "2024-05-23 21:37:54"
      },
      {
        "id": 242,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:38:47",
        "created_at": "2024-05-23 21:38:48",
        "updated_at": "2024-05-23 21:38:48"
      },
      {
        "id": 243,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:38:49",
        "created_at": "2024-05-23 21:38:50",
        "updated_at": "2024-05-23 21:38:50"
      },
      {
        "id": 244,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:38:50",
        "created_at": "2024-05-23 21:38:51",
        "updated_at": "2024-05-23 21:38:51"
      },
      {
        "id": 245,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:38:51",
        "created_at": "2024-05-23 21:38:51",
        "updated_at": "2024-05-23 21:38:51"
      },
      {
        "id": 246,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:38:52",
        "created_at": "2024-05-23 21:38:52",
        "updated_at": "2024-05-23 21:38:52"
      },
      {
        "id": 247,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:39:43",
        "created_at": "2024-05-23 21:39:43",
        "updated_at": "2024-05-23 21:39:43"
      },
      {
        "id": 248,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:39:44",
        "created_at": "2024-05-23 21:39:45",
        "updated_at": "2024-05-23 21:39:45"
      },
      {
        "id": 249,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:39:47",
        "created_at": "2024-05-23 21:39:48",
        "updated_at": "2024-05-23 21:39:48"
      },
      {
        "id": 250,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:39:48",
        "created_at": "2024-05-23 21:39:48",
        "updated_at": "2024-05-23 21:39:48"
      },
      {
        "id": 251,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:39:49",
        "created_at": "2024-05-23 21:39:49",
        "updated_at": "2024-05-23 21:39:49"
      },
      {
        "id": 252,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:40:40",
        "created_at": "2024-05-23 21:40:40",
        "updated_at": "2024-05-23 21:40:40"
      },
      {
        "id": 253,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:40:42",
        "created_at": "2024-05-23 21:40:42",
        "updated_at": "2024-05-23 21:40:42"
      },
      {
        "id": 254,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:40:42",
        "created_at": "2024-05-23 21:40:43",
        "updated_at": "2024-05-23 21:40:43"
      },
      {
        "id": 255,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:40:43",
        "created_at": "2024-05-23 21:40:43",
        "updated_at": "2024-05-23 21:40:43"
      },
      {
        "id": 256,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:40:45",
        "created_at": "2024-05-23 21:40:46",
        "updated_at": "2024-05-23 21:40:46"
      },
      {
        "id": 257,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:41:36",
        "created_at": "2024-05-23 21:41:37",
        "updated_at": "2024-05-23 21:41:37"
      },
      {
        "id": 258,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:41:38",
        "created_at": "2024-05-23 21:41:38",
        "updated_at": "2024-05-23 21:41:38"
      },
      {
        "id": 259,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:41:38",
        "created_at": "2024-05-23 21:41:39",
        "updated_at": "2024-05-23 21:41:39"
      },
      {
        "id": 260,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:41:39",
        "created_at": "2024-05-23 21:41:40",
        "updated_at": "2024-05-23 21:41:40"
      },
      {
        "id": 261,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:41:40",
        "created_at": "2024-05-23 21:41:41",
        "updated_at": "2024-05-23 21:41:41"
      },
      {
        "id": 262,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:42:31",
        "created_at": "2024-05-23 21:42:31",
        "updated_at": "2024-05-23 21:42:31"
      },
      {
        "id": 263,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:42:33",
        "created_at": "2024-05-23 21:42:33",
        "updated_at": "2024-05-23 21:42:33"
      },
      {
        "id": 264,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:42:33",
        "created_at": "2024-05-23 21:42:34",
        "updated_at": "2024-05-23 21:42:34"
      },
      {
        "id": 265,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:42:34",
        "created_at": "2024-05-23 21:42:34",
        "updated_at": "2024-05-23 21:42:34"
      },
      {
        "id": 266,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:42:35",
        "created_at": "2024-05-23 21:42:35",
        "updated_at": "2024-05-23 21:42:35"
      },
      {
        "id": 267,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:43:26",
        "created_at": "2024-05-23 21:43:26",
        "updated_at": "2024-05-23 21:43:26"
      },
      {
        "id": 268,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:43:28",
        "created_at": "2024-05-23 21:43:28",
        "updated_at": "2024-05-23 21:43:28"
      },
      {
        "id": 269,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:43:28",
        "created_at": "2024-05-23 21:43:29",
        "updated_at": "2024-05-23 21:43:29"
      },
      {
        "id": 270,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:43:29",
        "created_at": "2024-05-23 21:43:30",
        "updated_at": "2024-05-23 21:43:30"
      },
      {
        "id": 271,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:43:30",
        "created_at": "2024-05-23 21:43:30",
        "updated_at": "2024-05-23 21:43:30"
      },
      {
        "id": 272,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:44:24",
        "created_at": "2024-05-23 21:44:24",
        "updated_at": "2024-05-23 21:44:24"
      },
      {
        "id": 273,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:44:26",
        "created_at": "2024-05-23 21:44:26",
        "updated_at": "2024-05-23 21:44:26"
      },
      {
        "id": 274,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:44:26",
        "created_at": "2024-05-23 21:44:26",
        "updated_at": "2024-05-23 21:44:26"
      },
      {
        "id": 275,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:44:27",
        "created_at": "2024-05-23 21:44:27",
        "updated_at": "2024-05-23 21:44:27"
      },
      {
        "id": 276,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:44:28",
        "created_at": "2024-05-23 21:44:29",
        "updated_at": "2024-05-23 21:44:29"
      },
      {
        "id": 277,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:45:19",
        "created_at": "2024-05-23 21:45:20",
        "updated_at": "2024-05-23 21:45:20"
      },
      {
        "id": 278,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:45:21",
        "created_at": "2024-05-23 21:45:21",
        "updated_at": "2024-05-23 21:45:21"
      },
      {
        "id": 279,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:45:21",
        "created_at": "2024-05-23 21:45:22",
        "updated_at": "2024-05-23 21:45:22"
      },
      {
        "id": 280,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:45:22",
        "created_at": "2024-05-23 21:45:22",
        "updated_at": "2024-05-23 21:45:22"
      },
      {
        "id": 281,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:45:23",
        "created_at": "2024-05-23 21:45:23",
        "updated_at": "2024-05-23 21:45:23"
      },
      {
        "id": 282,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "15:46:13",
        "created_at": "2024-05-23 21:46:14",
        "updated_at": "2024-05-23 21:46:14"
      },
      {
        "id": 283,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "15:46:15",
        "created_at": "2024-05-23 21:46:15",
        "updated_at": "2024-05-23 21:46:15"
      },
      {
        "id": 284,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "15:46:15",
        "created_at": "2024-05-23 21:46:16",
        "updated_at": "2024-05-23 21:46:16"
      },
      {
        "id": 285,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "15:46:16",
        "created_at": "2024-05-23 21:46:17",
        "updated_at": "2024-05-23 21:46:17"
      },
      {
        "id": 286,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "15:46:19",
        "created_at": "2024-05-23 21:46:19",
        "updated_at": "2024-05-23 21:46:19"
      },
      {
        "id": 287,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:05:55",
        "created_at": "2024-05-23 22:05:56",
        "updated_at": "2024-05-23 22:05:56"
      },
      {
        "id": 288,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:05:57",
        "created_at": "2024-05-23 22:05:57",
        "updated_at": "2024-05-23 22:05:57"
      },
      {
        "id": 289,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:05:57",
        "created_at": "2024-05-23 22:05:58",
        "updated_at": "2024-05-23 22:05:58"
      },
      {
        "id": 290,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:05:58",
        "created_at": "2024-05-23 22:05:59",
        "updated_at": "2024-05-23 22:05:59"
      },
      {
        "id": 291,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:05:59",
        "created_at": "2024-05-23 22:06:00",
        "updated_at": "2024-05-23 22:06:00"
      },
      {
        "id": 292,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:06:50",
        "created_at": "2024-05-23 22:06:51",
        "updated_at": "2024-05-23 22:06:51"
      },
      {
        "id": 293,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:06:52",
        "created_at": "2024-05-23 22:06:52",
        "updated_at": "2024-05-23 22:06:52"
      },
      {
        "id": 294,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:06:53",
        "created_at": "2024-05-23 22:06:53",
        "updated_at": "2024-05-23 22:06:53"
      },
      {
        "id": 295,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:06:53",
        "created_at": "2024-05-23 22:06:54",
        "updated_at": "2024-05-23 22:06:54"
      },
      {
        "id": 296,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:06:54",
        "created_at": "2024-05-23 22:06:54",
        "updated_at": "2024-05-23 22:06:54"
      },
      {
        "id": 297,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:07:45",
        "created_at": "2024-05-23 22:07:46",
        "updated_at": "2024-05-23 22:07:46"
      },
      {
        "id": 298,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:07:47",
        "created_at": "2024-05-23 22:07:47",
        "updated_at": "2024-05-23 22:07:47"
      },
      {
        "id": 299,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:07:47",
        "created_at": "2024-05-23 22:07:48",
        "updated_at": "2024-05-23 22:07:48"
      },
      {
        "id": 300,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:07:49",
        "created_at": "2024-05-23 22:07:50",
        "updated_at": "2024-05-23 22:07:50"
      },
      {
        "id": 301,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "00:31:04",
        "created_at": "2024-05-23 22:07:51",
        "updated_at": "2024-05-23 22:07:51"
      },
      {
        "id": 302,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:08:42",
        "created_at": "2024-05-23 22:08:42",
        "updated_at": "2024-05-23 22:08:42"
      },
      {
        "id": 303,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:08:43",
        "created_at": "2024-05-23 22:08:44",
        "updated_at": "2024-05-23 22:08:44"
      },
      {
        "id": 304,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "00:31:58",
        "created_at": "2024-05-23 22:08:45",
        "updated_at": "2024-05-23 22:08:45"
      },
      {
        "id": 305,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:08:46",
        "created_at": "2024-05-23 22:08:46",
        "updated_at": "2024-05-23 22:08:46"
      },
      {
        "id": 306,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:08:46",
        "created_at": "2024-05-23 22:08:47",
        "updated_at": "2024-05-23 22:08:47"
      },
      {
        "id": 307,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:09:37",
        "created_at": "2024-05-23 22:09:38",
        "updated_at": "2024-05-23 22:09:38"
      },
      {
        "id": 308,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:09:39",
        "created_at": "2024-05-23 22:09:40",
        "updated_at": "2024-05-23 22:09:40"
      },
      {
        "id": 309,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:09:40",
        "created_at": "2024-05-23 22:09:40",
        "updated_at": "2024-05-23 22:09:40"
      },
      {
        "id": 310,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:09:41",
        "created_at": "2024-05-23 22:09:41",
        "updated_at": "2024-05-23 22:09:41"
      },
      {
        "id": 311,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:09:41",
        "created_at": "2024-05-23 22:09:42",
        "updated_at": "2024-05-23 22:09:42"
      },
      {
        "id": 312,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:10:32",
        "created_at": "2024-05-23 22:10:33",
        "updated_at": "2024-05-23 22:10:33"
      },
      {
        "id": 313,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:10:34",
        "created_at": "2024-05-23 22:10:35",
        "updated_at": "2024-05-23 22:10:35"
      },
      {
        "id": 314,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:10:35",
        "created_at": "2024-05-23 22:10:36",
        "updated_at": "2024-05-23 22:10:36"
      },
      {
        "id": 315,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:10:36",
        "created_at": "2024-05-23 22:10:36",
        "updated_at": "2024-05-23 22:10:36"
      },
      {
        "id": 316,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:10:36",
        "created_at": "2024-05-23 22:10:37",
        "updated_at": "2024-05-23 22:10:37"
      },
      {
        "id": 317,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:11:27",
        "created_at": "2024-05-23 22:11:28",
        "updated_at": "2024-05-23 22:11:28"
      },
      {
        "id": 318,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:11:29",
        "created_at": "2024-05-23 22:11:30",
        "updated_at": "2024-05-23 22:11:30"
      },
      {
        "id": 319,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:11:30",
        "created_at": "2024-05-23 22:11:30",
        "updated_at": "2024-05-23 22:11:30"
      },
      {
        "id": 320,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:11:31",
        "created_at": "2024-05-23 22:11:31",
        "updated_at": "2024-05-23 22:11:31"
      },
      {
        "id": 321,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:11:31",
        "created_at": "2024-05-23 22:11:32",
        "updated_at": "2024-05-23 22:11:32"
      },
      {
        "id": 322,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:12:22",
        "created_at": "2024-05-23 22:12:23",
        "updated_at": "2024-05-23 22:12:23"
      },
      {
        "id": 323,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:12:24",
        "created_at": "2024-05-23 22:12:24",
        "updated_at": "2024-05-23 22:12:24"
      },
      {
        "id": 324,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:12:25",
        "created_at": "2024-05-23 22:12:25",
        "updated_at": "2024-05-23 22:12:25"
      },
      {
        "id": 325,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:12:25",
        "created_at": "2024-05-23 22:12:26",
        "updated_at": "2024-05-23 22:12:26"
      },
      {
        "id": 326,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:12:26",
        "created_at": "2024-05-23 22:12:26",
        "updated_at": "2024-05-23 22:12:26"
      },
      {
        "id": 327,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:13:17",
        "created_at": "2024-05-23 22:13:18",
        "updated_at": "2024-05-23 22:13:18"
      },
      {
        "id": 328,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:13:19",
        "created_at": "2024-05-23 22:13:19",
        "updated_at": "2024-05-23 22:13:19"
      },
      {
        "id": 329,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:13:19",
        "created_at": "2024-05-23 22:13:20",
        "updated_at": "2024-05-23 22:13:20"
      },
      {
        "id": 330,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:13:20",
        "created_at": "2024-05-23 22:13:21",
        "updated_at": "2024-05-23 22:13:21"
      },
      {
        "id": 331,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:13:21",
        "created_at": "2024-05-23 22:13:22",
        "updated_at": "2024-05-23 22:13:22"
      },
      {
        "id": 332,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:14:13",
        "created_at": "2024-05-23 22:14:14",
        "updated_at": "2024-05-23 22:14:14"
      },
      {
        "id": 333,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:14:15",
        "created_at": "2024-05-23 22:14:15",
        "updated_at": "2024-05-23 22:14:15"
      },
      {
        "id": 334,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:14:15",
        "created_at": "2024-05-23 22:14:16",
        "updated_at": "2024-05-23 22:14:16"
      },
      {
        "id": 335,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:14:16",
        "created_at": "2024-05-23 22:14:17",
        "updated_at": "2024-05-23 22:14:17"
      },
      {
        "id": 336,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:14:17",
        "created_at": "2024-05-23 22:14:17",
        "updated_at": "2024-05-23 22:14:17"
      },
      {
        "id": 337,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": 200,
        "hora": "16:15:08",
        "created_at": "2024-05-23 22:15:09",
        "updated_at": "2024-05-23 22:15:09"
      },
      {
        "id": 338,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:15:10",
        "created_at": "2024-05-23 22:15:11",
        "updated_at": "2024-05-23 22:15:11"
      },
      {
        "id": 339,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": 200,
        "hora": "16:15:11",
        "created_at": "2024-05-23 22:15:12",
        "updated_at": "2024-05-23 22:15:12"
      },
      {
        "id": 340,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": 401,
        "hora": "16:15:12",
        "created_at": "2024-05-23 22:15:13",
        "updated_at": "2024-05-23 22:15:13"
      },
      {
        "id": 341,
        "endpoint": "/Y54BRBjj",
        "alias": "logout CImovil",
        "status": 401,
        "hora": "16:15:13",
        "created_at": "2024-05-23 22:15:14",
        "updated_at": "2024-05-23 22:15:14"
      },
      {
        "id": 342,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:16:56",
        "created_at": "2024-05-24 22:16:57",
        "updated_at": "2024-05-24 22:16:57"
      },
      {
        "id": 343,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:17:02",
        "created_at": "2024-05-24 22:17:02",
        "updated_at": "2024-05-24 22:17:02"
      },
      {
        "id": 344,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:17:08",
        "created_at": "2024-05-24 22:17:09",
        "updated_at": "2024-05-24 22:17:09"
      },
      {
        "id": 345,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:17:17",
        "created_at": "2024-05-24 22:17:18",
        "updated_at": "2024-05-24 22:17:18"
      },
      {
        "id": 346,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:18:18",
        "created_at": "2024-05-24 22:18:18",
        "updated_at": "2024-05-24 22:18:18"
      },
      {
        "id": 347,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:18:24",
        "created_at": "2024-05-24 22:18:24",
        "updated_at": "2024-05-24 22:18:24"
      },
      {
        "id": 348,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "00:29:28",
        "created_at": "2024-05-24 22:18:31",
        "updated_at": "2024-05-24 22:18:31"
      },
      {
        "id": 349,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "00:29:38",
        "created_at": "2024-05-24 22:18:41",
        "updated_at": "2024-05-24 22:18:41"
      },
      {
        "id": 350,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "00:29:17",
        "created_at": "2024-05-24 22:19:46",
        "updated_at": "2024-05-24 22:19:46"
      },
      {
        "id": 351,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:19:50",
        "created_at": "2024-05-24 22:19:51",
        "updated_at": "2024-05-24 22:19:51"
      },
      {
        "id": 352,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:19:56",
        "created_at": "2024-05-24 22:20:00",
        "updated_at": "2024-05-24 22:20:00"
      },
      {
        "id": 353,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:20:08",
        "created_at": "2024-05-24 22:20:09",
        "updated_at": "2024-05-24 22:20:09"
      },
      {
        "id": 354,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:21:08",
        "created_at": "2024-05-24 22:21:09",
        "updated_at": "2024-05-24 22:21:09"
      },
      {
        "id": 355,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:21:13",
        "created_at": "2024-05-24 22:21:14",
        "updated_at": "2024-05-24 22:21:14"
      },
      {
        "id": 356,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:21:19",
        "created_at": "2024-05-24 22:21:20",
        "updated_at": "2024-05-24 22:21:20"
      },
      {
        "id": 357,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:21:29",
        "created_at": "2024-05-24 22:21:29",
        "updated_at": "2024-05-24 22:21:29"
      },
      {
        "id": 358,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:22:28",
        "created_at": "2024-05-24 22:22:29",
        "updated_at": "2024-05-24 22:22:29"
      },
      {
        "id": 359,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:22:33",
        "created_at": "2024-05-24 22:22:34",
        "updated_at": "2024-05-24 22:22:34"
      },
      {
        "id": 360,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:22:40",
        "created_at": "2024-05-24 22:22:41",
        "updated_at": "2024-05-24 22:22:41"
      },
      {
        "id": 361,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:22:49",
        "created_at": "2024-05-24 22:22:49",
        "updated_at": "2024-05-24 22:22:49"
      },
      {
        "id": 362,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:23:48",
        "created_at": "2024-05-24 22:23:49",
        "updated_at": "2024-05-24 22:23:49"
      },
      {
        "id": 363,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "16:23:58",
        "created_at": "2024-05-24 22:23:59",
        "updated_at": "2024-05-24 22:23:59"
      },
      {
        "id": 364,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:24:07",
        "created_at": "2024-05-24 22:24:08",
        "updated_at": "2024-05-24 22:24:08"
      },
      {
        "id": 365,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:24:16",
        "created_at": "2024-05-24 22:24:17",
        "updated_at": "2024-05-24 22:24:17"
      },
      {
        "id": 366,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:25:16",
        "created_at": "2024-05-24 22:25:16",
        "updated_at": "2024-05-24 22:25:16"
      },
      {
        "id": 367,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "16:25:25",
        "created_at": "2024-05-24 22:25:25",
        "updated_at": "2024-05-24 22:25:25"
      },
      {
        "id": 368,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:25:34",
        "created_at": "2024-05-24 22:25:34",
        "updated_at": "2024-05-24 22:25:34"
      },
      {
        "id": 369,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:25:43",
        "created_at": "2024-05-24 22:25:44",
        "updated_at": "2024-05-24 22:25:44"
      },
      {
        "id": 370,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:26:43",
        "created_at": "2024-05-24 22:26:43",
        "updated_at": "2024-05-24 22:26:43"
      },
      {
        "id": 371,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:26:49",
        "created_at": "2024-05-24 22:26:50",
        "updated_at": "2024-05-24 22:26:50"
      },
      {
        "id": 372,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:26:55",
        "created_at": "2024-05-24 22:26:56",
        "updated_at": "2024-05-24 22:26:56"
      },
      {
        "id": 373,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:27:04",
        "created_at": "2024-05-24 22:27:05",
        "updated_at": "2024-05-24 22:27:05"
      },
      {
        "id": 374,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:28:04",
        "created_at": "2024-05-24 22:28:05",
        "updated_at": "2024-05-24 22:28:05"
      },
      {
        "id": 375,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:28:09",
        "created_at": "2024-05-24 22:28:10",
        "updated_at": "2024-05-24 22:28:10"
      },
      {
        "id": 376,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:28:15",
        "created_at": "2024-05-24 22:28:16",
        "updated_at": "2024-05-24 22:28:16"
      },
      {
        "id": 377,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:28:25",
        "created_at": "2024-05-24 22:28:26",
        "updated_at": "2024-05-24 22:28:26"
      },
      {
        "id": 378,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:29:27",
        "created_at": "2024-05-24 22:29:28",
        "updated_at": "2024-05-24 22:29:28"
      },
      {
        "id": 379,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:29:34",
        "created_at": "2024-05-24 22:29:35",
        "updated_at": "2024-05-24 22:29:35"
      },
      {
        "id": 380,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:29:40",
        "created_at": "2024-05-24 22:29:41",
        "updated_at": "2024-05-24 22:29:41"
      },
      {
        "id": 381,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:29:50",
        "created_at": "2024-05-24 22:29:51",
        "updated_at": "2024-05-24 22:29:51"
      },
      {
        "id": 382,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "00:29:16",
        "created_at": "2024-05-24 22:30:52",
        "updated_at": "2024-05-24 22:30:52"
      },
      {
        "id": 383,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:30:57",
        "created_at": "2024-05-24 22:30:58",
        "updated_at": "2024-05-24 22:30:58"
      },
      {
        "id": 384,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:31:04",
        "created_at": "2024-05-24 22:31:04",
        "updated_at": "2024-05-24 22:31:04"
      },
      {
        "id": 385,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:31:13",
        "created_at": "2024-05-24 22:31:14",
        "updated_at": "2024-05-24 22:31:14"
      },
      {
        "id": 386,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "00:29:16",
        "created_at": "2024-05-24 22:32:16",
        "updated_at": "2024-05-24 22:32:16"
      },
      {
        "id": 387,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": -11,
        "hora": "16:32:24",
        "created_at": "2024-05-24 22:32:25",
        "updated_at": "2024-05-24 22:32:25"
      },
      {
        "id": 388,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:32:34",
        "created_at": "2024-05-24 22:32:34",
        "updated_at": "2024-05-24 22:32:34"
      },
      {
        "id": 389,
        "endpoint": "/DEaJElvWw8",
        "alias": "login CImovil",
        "status": -11,
        "hora": "16:32:42",
        "created_at": "2024-05-24 22:32:44",
        "updated_at": "2024-05-24 22:32:44"
      },
      {
        "id": 390,
        "endpoint": "/UnM7Fl9BcM",
        "alias": "validacion de estado",
        "status": -11,
        "hora": "16:33:43",
        "created_at": "2024-05-24 22:33:44",
        "updated_at": "2024-05-24 22:33:44"
      },
      {
        "id": 391,
        "endpoint": "/c71p0k33n",
        "alias": "Tipo token CIMovil",
        "status": 200,
        "hora": "16:33:49",
        "created_at": "2024-05-24 22:33:50",
        "updated_at": "2024-05-24 22:33:50"
      },
      {
        "id": 392,
        "endpoint": "/637s4dRT2o",
        "alias": "codigo HMAC",
        "status": -11,
        "hora": "16:33:55",
        "created_at": "2024-05-24 22:33:56",
        "updated_at": "2024-05-24 22:33:56"
      }

    ])
  }
}

module.exports = LogSeeder
