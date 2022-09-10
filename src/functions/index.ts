import awsLambdaFastify from '@fastify/aws-lambda'
import { app } from '@/ports/fastify/server'

export const handler = awsLambdaFastify(app)
