import { FastifyInstance } from 'fastify'
import { register } from './register'

// import { verifyJwt } from '../../../middlewares/verify-jwt'
// import { authenticate } from './authenticate'
// import { profile } from './profile'
// import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {

  app.post('/register', register)



  // //authenticate
  // app.get('/profile', {onRequest: [verifyJwt]}, profile)
}
