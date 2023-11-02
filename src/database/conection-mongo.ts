import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  try {
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
      console.log("connecting mongodb ✅");
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

