import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFetchAnnoucementByCategoryUseCase } from "../../../use-cases/factories/make-fetch-annoucement-by-category-use-case";

export async function findAnnoucencementByCategory(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const findAnnoucenQuerySchema = z.object({
      page: z.coerce.number().min(1).default(1), // transforming into a number with a default value of 1
      category: z.string(),
    });

    const { page, category } = findAnnoucenQuerySchema.parse(request.query);

    if (
      category !== "veiculo" &&
      category !== "produto" &&
      category !== "servico" ||
      !category
    ) {
      return reply.status(400).send({
        message:
          "Category is invalid. It should include (veiculo), (produto), or (servico).",
      });
    }
    const fetchAnnoucementByCategoryUseCase =
      makeFetchAnnoucementByCategoryUseCase();

    const userSub = (request.user as { sub: string }).sub;

    const { announcement } = await fetchAnnoucementByCategoryUseCase.execute({
      userId: userSub,
      page,
      category,
    });

    return reply.status(201).send({
      announcement,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return reply.status(500).send({
      message: "An error occurred while processing the request",
    });
  }
}
