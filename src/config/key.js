export default {
  mongoURI: process.env.mongoURI || 'mongodb://localhost:27017/restapi',
  mongoTest: process.env.mongoTest || 'mongodb://localhost:27017/restapitest',
  hostTest: process.env.hostTest || 'localhost:5001'
};
