const express = require('express')
const app = express()

app.set('secret', 'w7u6h5a3o018939782')

app.use(require('cors')())
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.use('/admin', express.static(__dirname + '/admin'))

const port = 9881
app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
})