//conexion a postgres
const {Client} = require('pg')
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "29062002",
  database: "test"
})
client.connect();
module.exports = {

  connect: function () {
    const config = {
      server: '',
      authentication: {
        type: 'default',
        options: {
          userName: 'SA',
          password: 'Tr4m4nd0sCUMb10n3s*'
        }
      }
    }

    const connection = new Connection(config)
    
    
    connection.on('connect', (err) => {
      if (err) {
        console.log(err)
      } else {
        executeStatement()
      }
    })
  }
}
  function executeStatement () {
    request = new Request("select 123 as LALA, 'hello world' as HPTA", (err, rowCount) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`${rowCount} rows`)
      }
      connection.close()
    })

    request.on('row', (columns) => {
      columns.forEach((column) => {
        if (column.value === null) {
          console.log('NULL')
        } else {
          console.log(column.value)
        }
      })
    })

    connection.execSql(request)
  }
/* 
const getConnection = () =>{
  return connection
};
module.exports = {
  getConnection
}*/

module.exports = client;
