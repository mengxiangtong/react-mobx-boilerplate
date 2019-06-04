let express = require('express')
let app = express()

let ip = '0.0.0.0'
let port = 3000

app.get('/', (req, res) => {
  res.send('mock 启动成功')
})

app.listen(port, ip, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('--> mock 启动成功，地址为 http://%s:%s/', ip, port)
})
