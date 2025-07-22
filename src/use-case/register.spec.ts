import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { compare } from 'bcryptjs'
describe('Register Use Case', () => {
    it('Should hash user password upon registration', async () => {
        // const prismaUsersRepository = new PrismaUsersRepository()
        // const registerUseCase = new RegisterUseCase(prismaUsersRepository)
        // const registerUseCase = new RegisterUseCase({
        //     async findByEmail(email) {
        //         return null
        //     },
        //     async create(data) {
        //         return {
        //             id: 'user-01',
        //             name: data.name,
        //             email: data.email,
        //             password_hash: data.password_hash,
        //             created_at: new Date(),
        //         }
        //     },
        // })
        // const { user } = await registerUseCase.execute({
        //     name: 'john Doe',
        //     email: 'JohnDoe@gmail.com',
        //     password: '123456'
        // })
        // const isPasswordCorrectlyHashed = await compare('123456', user.password_hash,)
        // expect(isPasswordCorrectlyHashed).toBe(true)
    })
})