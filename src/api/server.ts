import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { checkoutRoutes } from './routes/checkoutRoutes';

const app = express();
const port = 3000;

// Load OpenAPI spec
const openapiSpec = YAML.load('./src/api/openapi.yaml');

// Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));

// Routes
app.use('/api/v1', checkoutRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`API Docs: http://localhost:${port}/api-docs`);
});