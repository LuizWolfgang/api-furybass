import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import { usersRoutes } from "./http/controllers/users/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { announcementRoutes } from "./http/controllers/announcement/routes";
import fastifyCookie from "@fastify/cookie";
import { connectToMongoDB } from "./database/conection-mongo";
import  multer from 'fastify-multer'

export const app = fastify();

try {

  connectToMongoDB();

  app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
      cookieName: "refreshToken",
      signed: false,
    },
    sign: {
      expiresIn: "10m",
    },
  });

  app.register(fastifyCookie);
  app.register(multer.contentParser)

  app.register(usersRoutes);
  app.register(announcementRoutes);

  app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: "Validation error.", issues: error.format() });
    }

    if (env.NODE_ENV !== "production") {
      console.error(error);
    }

    return reply.status(500).send({ message: "Internal server error." });
  });
} catch (error) {
  console.log(error);
}
