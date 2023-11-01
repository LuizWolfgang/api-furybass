import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../../middlewares/verifyJwt'
import { create } from './create'
import { findAnnoucencementById } from './findAnnoucencementById'
import { findAnnoucencementByCategory } from './fetchAnnouncementByCategory'

export async function announcementRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/announcement', create)
  app.get('/findAnnoucencementById', findAnnoucencementById)
  app.get('/fetchAnnouncementByCategory', findAnnoucencementByCategory)
}
