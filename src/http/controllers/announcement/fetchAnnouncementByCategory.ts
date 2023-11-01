import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFetchAnnoucementByCategoryUseCase } from "../../../use-cases/factories/make-fetch-annoucement-by-category-use-case";

export async function findAnnoucencementByCategory(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findAnnoucenQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1), //trasnformando em numero e o default é igual a 1
    category: z.string(),
  });

  const { page, category } = findAnnoucenQuerySchema.parse(request.query);

  if (category !== 'veiculo' && category !== 'produto' && category !== 'servico' || !category) {
    return reply.status(400).send({
      message:
        "Category is invalid. It should include (veiculo), (produto), or (servico).",
    });
  }
  const fetchAnnoucementByCategoryUseCase =
    makeFetchAnnoucementByCategoryUseCase();

  const { announcement } = await fetchAnnoucementByCategoryUseCase.execute({
    page,
    category,
  });

  return reply.status(201).send({
    announcement,
  });
}
