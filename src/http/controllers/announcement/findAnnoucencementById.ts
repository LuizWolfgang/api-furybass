import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAnnoucementByIdUseCase } from '../../../use-cases/factories/make-get-annoucement-by-id-use-case';

export async function findAnnoucencementById(request: FastifyRequest, reply: FastifyReply) {

  const userSub = (request.user as { sub: string }).sub;

  const getAnnoucementByIdUseCase = makeGetAnnoucementByIdUseCase()

  const {announcement} = await getAnnoucementByIdUseCase.execute({
    userId: userSub,
  })

  return reply.status(201).send({
    announcement
  })
}
