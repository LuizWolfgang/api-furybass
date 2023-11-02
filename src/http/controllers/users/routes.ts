import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJwt } from '../../../middlewares/verifyJwt'
import { refresh } from './refresh-token'


export async function usersRoutes(app: FastifyInstance) {

  app.post('/register', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)


  //authenticated
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
