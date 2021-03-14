import express from 'express'
import { getProductRoutes } from './products'
import { getUserRoutes } from './user'

function getRoutes() {
  const router = express.Router()
  router.use('/products', getProductRoutes())
  router.use('/users', getUserRoutes())
  return router
}
export { getRoutes }
