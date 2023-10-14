import mongoose from 'mongoose';
import fastify from 'fastify';
import { usersRoutes } from './http/controllers/users/routes';

export const app = fastify();
app.register(usersRoutes);

mongoose.connect('mongodb://localhost:27017')
  .then(() =>{
    // app.use((req, res, next) => {
    //   res.setHeader('Access-Control-Allow-Origin', '*');
    //   res.setHeader('Access-Control-Allow-Methods', '*');
    //   res.setHeader('Access-Control-Allow-Headers', '*');
    //   next();
    // })

    // app.use(express.json())
    // app.use(cookieParser());

    // app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    console.log('conectado ao mongoDB')
  })
  .catch(() => console.log('Erro ao conectar com o mongoDB'))
