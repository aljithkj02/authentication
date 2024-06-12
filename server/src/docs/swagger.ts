/** 
    Using auto gen 

    import swaggerAutogen from 'swagger-autogen'

    const outputFile = './swagger_output.json';
    const endPointsFiles = ['../index.ts'];

    swaggerAutogen(outputFile, endPointsFiles);
*/


import swaggerJsdoc from 'swagger-jsdoc'
import {version} from '../../package.json'
import swaggerUi from 'swagger-ui-express'
import {Express, Request, Response} from 'express'

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Authentication APIs Doc',
            version
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        basePath: 'http://localhost:8000/api',
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: [`${__dirname}/../routers/*.ts`]
}

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get('/docs.json', (req: Request, res: Response) => {
        return res.json(swaggerSpec);
    })

    console.log("Docs available at localhost:8000/docs");
}