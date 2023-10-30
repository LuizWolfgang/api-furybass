import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJwt } from '../../../middlewares/verifyJwt'

// import { verifyJwt } from '../../../middlewares/verify-jwt'
// import { authenticate } from './authenticate'
// import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {

  app.post('/register', register)
  app.post('/sessions', authenticate)



  //authenticated
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
