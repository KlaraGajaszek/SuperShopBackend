import logger from 'loglevel'
import { Request, Response, Router } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

function getUserRoutes() {
  const router = Router()
  router.get('/', getUsers)
  router.get('/:id', getUser)
  router.post('/', createUser)
  return router
}
// all the controller and utility functions here:
async function getUsers(req: Request, res: Response) {
  console.log(req.body)
  const users = await getRepository(User).find()
  logger.info('[users] getUsers')
  res.send(users)
}

async function getUser(req: Request, res: Response) {
  const users = await getRepository(User).findOne(req.params.id)
  logger.info('[users] getUser')
  res.send(users)
}

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).create(req.body)
  const results = await getRepository(User).save(newUser)
  return res.json(results)
}

export { getUserRoutes }
