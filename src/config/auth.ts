import 'dotenv/config'
import { env } from '../env';

export default {
  jwtInfo: {
    secret: env.JWT_SECRET || 'default',
    expiresIn: '6h',
  },
};
