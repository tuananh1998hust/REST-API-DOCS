import app from './app';
import connectDB from './config/db';
import config from './config/key';

console.log(config);

const port = process.env.port || 5000;

async function start() {
  await connectDB(config.mongoURI);

  app.listen(port, () => console.log(`Server is start on port ${port}`));
}

// Start Server
start();
