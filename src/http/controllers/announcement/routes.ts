import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../../middlewares/verifyJwt'
import { create } from './create'
import { findAnnoucencementById } from './findAnnoucencementById'
import { findAnnoucencementByCategory } from './fetchAnnouncementByCategory'

import  multer from 'fastify-multer'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

export async function announcementRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/announcement', { preHandler: upload.array('image') }, create)
  app.get('/findAnnoucencementById', findAnnoucencementById)
  app.get('/fetchAnnouncementByCategory', findAnnoucencementByCategory)
}
