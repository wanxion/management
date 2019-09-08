module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router()

  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.get('/', async (req, res) => {
    const model = await req.Model.find()
    res.send(model)
  })

  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({ success: true })
  })

  const authMiddleware = async (req, res, next) => {
    try {
      const token = String(req.headers.authorization || '').split(' ').pop()
      const { id } = jwt.verify(token, app.get('secret'))
      req.user = await AdminUser.findById(id)
    }
    catch (err) {
      if (err) {
        return res.status(401).send({
          message: '非法访问'
        })
      }
    }
    await next()
  }

  const resourceMiddleware = async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }

  app.use('/admin/api/rest/:resource', authMiddleware, resourceMiddleware, router)

  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', authMiddleware, upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await AdminUser.findOne({ username }).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户不存在！'
      })
    }
    const isValid = require('bcryptjs').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码不存在！'
      })
    }
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  app.post('/admin/api/register', async (req, res) => {
    const model = await AdminUser.create(req.body)
    res.send(model)
  })
}