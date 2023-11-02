import fastifyJwt from "@fastify/jwt";
import mongoose from "mongoose";
import fastify from "fastify";
import { usersRoutes } from "./http/controllers/users/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { announcementRoutes } from "./http/controllers/announcement/routes";
import fastifyCookie from "@fastify/cookie";


export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)
app.register(usersRoutes)
app.register(announcementRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    // app.use((req, res, next) => {
    //   res.setHeader('Access-Control-Allow-Origin', '*');
    //   res.setHeader('Access-Control-Allow-Methods', '*');
    //   res.setHeader('Access-Control-Allow-Headers', '*');
    //   next();
    // })

    // app.use(express.json())
    // app.use(cookieParser());

    // app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    console.log("conectado ao mongoDB");
  })
  .catch(() => console.log("Erro ao conectar com o mongoDB"));
