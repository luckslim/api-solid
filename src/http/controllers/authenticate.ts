import { FastifyRequest, FastifyReply } from 'fastify'
import z from "zod"
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/use-case/errors/user-already-exists-error'
import { AuthenticateUseCase } from '@/use-case/authenticate'
import { InvalidCredentialsError } from '@/use-case/errors/invalid-credentials-error'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    })
    const {email, password } = authenticateBodySchema.parse(request.body)
    try {
        const userRepository = new PrismaUsersRepository()
        const authenticateUseCase = new AuthenticateUseCase(userRepository)
        await authenticateUseCase.execute({
            email,
            password
        })
    } catch (err) {
        if(err instanceof InvalidCredentialsError){
            return reply.status(400).send({
                message: err.message
            })
        }
        return reply.status(500).send()
    }
    return reply.status(200).send()
}