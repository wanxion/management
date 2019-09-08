module.exports = app => {
  const express = require('express')
  const router = express.Router()

  router.get('/', async (req, res) => {
    const model = await req.Model.find()
    res.send(model)
  })
  
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  const resourceMiddleware = async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }

  app.use('/web/api/rest/:resource', resourceMiddleware, router)
}