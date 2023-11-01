import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateAnnoucementUseCase } from '../../../use-cases/factories/make-create-annoucement-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createAnnouncementBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    number: z.string(),
    price: z.string(),
    category: z.string(),
    type: z.string(),
    country: z.string(),
    city: z.string(),
    brand: z.string().nullable(),
    km: z.string().nullable(),
    year: z.string().nullable(),
    mediaUrls: z.array(z.object({
      url: z.string(),
      fileType: z.string(),
    })),
  })

  const {
    title,
    description,
    number,
    price,
    category,
    type,
    country,
    city,
    brand,
    km,
    year,
    mediaUrls,
  } =
  createAnnouncementBodySchema.parse(request.body)

  const userSub = (request.user as { sub: string }).sub;

  const createAnnouncementUseCase = makeCreateAnnoucementUseCase()

  const {announcement} = await createAnnouncementUseCase.execute({
    userId: userSub,
    title,
    description,
    number,
    price,
    category,
    type,
    country,
    city,
    brand: brand ? brand : undefined,
    km: km ? km : undefined,
    year: year ? year : undefined,
    mediaUrls,
  })

  return reply.status(201).send({
    message: 'Announcement has been created',
    announcement
  })
}
