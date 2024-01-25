import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    return console.log('No MONGODB_URI found in env!');
  }

  if (isConnected) {
    return console.log("Connected to MongoDB");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error); 
  }
}