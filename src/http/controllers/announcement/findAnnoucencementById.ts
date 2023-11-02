import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetAnnoucementByIdUseCase } from '../../../use-cases/factories/make-get-annoucement-by-id-use-case';

export async function findAnnoucencementById(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userSub = (request.user as { sub: string }).sub;

    const getAnnoucementByIdUseCase = makeGetAnnoucementByIdUseCase()

    const {announcement} = await getAnnoucementByIdUseCase.execute({
      userId: userSub,
    })

    return reply.status(201).send({
      announcement
    });
  } catch (error) {
    // Handle the error, log it, and send an appropriate response.
    console.error("An error occurred:", error);
    return reply.status(500).send({
      message: "An error occurred while processing the request",
    });
  }
}
