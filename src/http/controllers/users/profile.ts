import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserProfileUseCase } from '../../../use-cases/factories/make-get-user-profile-use-case'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase()

  const userSub = (request.user as { sub: string }).sub;

  const { user } = await getUserProfile.execute({
    userId: userSub,
  })

  return reply.status(200).send({
    user
  })
}
