import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterUseCase } from "../../../use-cases/register";
import { MongoUsersRepository } from "../../../repositories/mongo-users-repository";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  //validaçao dos dados
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(request.body);

  // const registerUseCase = makeRegisterUseCase()

  try {
    const mongoUsersRepository = new MongoUsersRepository();
    const registerUseCase = new RegisterUseCase(mongoUsersRepository);

    await registerUseCase.execute({
      name,
      email,
      password,
    });
  } catch (err) {
    // if(err instanceof UserAlreadyExistsError) {
      return reply.status(500).send('Error')
    // }
  }

  return reply.status(201).send();
}
