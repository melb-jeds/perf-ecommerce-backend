import { SignInCommand } from '@applications/commands/sign-in.command'
import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { EnvService } from '@applications/ports/services/env.service'
import { InvalidSignInException } from '@commons/exceptions/users/invalid-sign-in.exception'
import { Inject, Injectable } from '@nestjs/common'
import { compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

@Injectable()
export class SignInUsecase {
	constructor(
		@Inject('EnvService') private readonly envService: EnvService,
		@Inject('UserRepository') private readonly userRepository: UserRepository
	) {}

	public async handle(command: SignInCommand): Promise<string> {
		const user = await this.validate(command)

		const isValidPassword = compareSync(command.password, user.password)
		if (!isValidPassword) throw new InvalidSignInException()

		const { password, ...userWithoutPassword } = user
		const token = sign(userWithoutPassword, this.envService.getJwtPrivateKey())
		return token
	}

	private async validate(command: SignInCommand): Promise<User> {
		const user = this.userRepository.findByEmail(command.email)
		if (!!user) throw new InvalidSignInException()

		return user
	}
}
