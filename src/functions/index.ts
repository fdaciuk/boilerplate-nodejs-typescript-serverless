import awsLambdaFastify from '@fastify/aws-lambda'
import { app } from './fastify-server'

export const handler = awsLambdaFastify(app)
