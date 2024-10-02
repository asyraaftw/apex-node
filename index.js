'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var dotenv = require('dotenv');
var express_1 = require('express');
dotenv.config();
var _a = process.env,
  db = _a.db,
  host = _a.host,
  logging = _a.logging,
  password = _a.password,
  sync = _a.sync,
  portDb = _a.portDb,
  userNameDB = _a.userNameDB;
var app = (0, express_1.default)();
var port = process.env.PORT;
app.get('/', function (req, res) {
  res.send('Express + TypeScript Server');
});
app.listen(port, function () {
  console.log('\uD83D\uDC41\uFE0F on http://localhost:'.concat(port));
});
// const server = async () => {
//   const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "abc123",
//     database: "apex-root",
//     entities: [__dirname + "/entity/*.js"],
//     synchronize: true,
//   });
//   await AppDataSource.initialize();
//   console.log(AppDataSource);
// };
