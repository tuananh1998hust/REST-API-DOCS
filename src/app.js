import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import userApi from './routes/user.api';

const app = express();
const swaggerDocs = YAML.load(path.join(__dirname, '/swagger.yaml'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/api/user', userApi);

export default app;
