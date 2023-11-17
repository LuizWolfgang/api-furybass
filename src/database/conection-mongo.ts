import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  try {
    mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("connecting mongodb ✅");
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

