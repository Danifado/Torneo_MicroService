//conexion a postgres
// require('dotenv').config();
const {Client} = require('pg')

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

const client = new Client({
  host: "db-torneo.c4mm6oxejugp.us-east-1.rds.amazonaws.com",
  user: "postgres",
  port: "#qafTR4C77NT",
  password: 5432,
  database: "db-torneo",
  ssl: true
})
console.log("ASDASASDAS: ", process.env.RDS_PASSWORD)
client.connect();

module.exports = client;
