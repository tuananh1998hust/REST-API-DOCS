import mongoose from 'mongoose';

export default async function (mongoURI) {
  try {
    await mongoose.connect(mongoURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`Connect ${mongoURI}...`);
  } catch (error) {
    console.log(`DB Connect failed ${mongoURI}, err: ${error}`);
  }
}
