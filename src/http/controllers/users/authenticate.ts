import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { InvalidCredentialsError } from "../../../use-cases/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "../../../use-cases/factories/make-authenticate-use-case";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const autheticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = autheticateBodySchema.parse(request.body);

  try {
    // const mongoUsersRepository = new MongoUsersRepository(); // instanciei o repositorio
    // const authenticateUseCase = new AuthenticateUseCase(mongoUsersRepository); //mandei o repo para o use case


    //centralizador de caso de uso
    const authenticateUseCase = makeAuthenticateUseCase()

    await authenticateUseCase.execute({
      email,
      password,
    });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message});
    }
    throw err;
  }

  return reply.status(200).send();
}